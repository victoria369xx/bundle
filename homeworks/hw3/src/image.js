import img1Src from './assets/images/forrest.jpeg'
import img2Src from './assets/images/lake.jpg'
import img3Src from './assets/images/mountains.jpg'

let cards = document.querySelector('.cards');

let items = [
    {name: 'Лес', src: img1Src},
    {name: 'Озеро', src: img2Src},
    {name: 'Горы', src: img3Src},
]


items.forEach((item) =>{
    cards.insertAdjacentElement('beforeend', 
    `<div class="card">
  <img src='${item.src}' alt="фото">
  <h3>${item.name}</h3>
  </div>`
    )
});

module.exports = './image.js'