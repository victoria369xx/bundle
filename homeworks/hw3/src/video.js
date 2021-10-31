import videoSrc1 from './assets/videos/Sunset.mp4'
import videoSrc2 from './assets/videos/Eye.mp4'


let cards = document.querySelector('.cards');

let items = [
    {name: 'Закат', src: videoSrc1},
    {name: 'Глаз', src: videoSrc2},
]


items.forEach((item) =>{
    var newItem = document.createElement('div');
    newItem.innerHTML = `<div class="card">
    <video id="player" width="100%" height="150px" autoplay="autoplay" controls>
    <source src="${item.src}" type="video/mp4">
   </video>
    <h4>${item.name}</h4>
    </div>`
   cards.insertAdjacentElement('beforeend', newItem)
});
