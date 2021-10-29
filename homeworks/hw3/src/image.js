import img1Src from '../src/assets/images/forrest.jpeg'
import img2Src from '../src/assets/images/lake.jpg'
import img3Src from '../src/assets/images/mountains.jpg'

let cards = document.querySelector('.cards');

let items = [
    {name: 'Лес', src: img1Src},
    {name: 'Озеро', src: img2Src},
    {name: 'Горы', src: img3Src},
]

items.forEach(item =>{
    cards.insertAdjacentElement('beforeend', `
    <div class="card">
  <img src='${item.src}' alt="фото">
  <h3>${item.name}</h3>
  </div>`
    )
})

/*
  const renderImgCard = (img, title) => `<div class="card">
  <img src='../src/assets/images/${img}' alt="фото">
  <h3>${title}</h3>
  </div>`;

  const renderImgCardsList = list => {
    let  imgCardsList = list.map(card => renderImgCard(card.image, card.title));
    document.querySelector('.cards').innerHTML = imgCardsList.join('');
  }

  renderImgCardsList(imgCards);
*/