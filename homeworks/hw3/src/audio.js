import audioSrc1 from './assets/audio/Jazz.mp3'
import audioSrc2 from './assets/audio/Chillout.mp3'
import audioSrc3 from './assets/audio/Lounge.mp3'

let cards = document.querySelector('.cards');

let items = [
    {name: 'Джаз', src: audioSrc1},
    {name: 'Чилаут', src: audioSrc2},
    {name: 'Лаундж', src: audioSrc3},
]


items.forEach((item) =>{
    var newItem = document.createElement('div');
    newItem.innerHTML = `<div class="card">
    <div class= "audioCard">
    <audio class="audio" src='${item.src}' controls> </audio>
    </div>
    <h4>${item.name}</h4>
    </div>`
   cards.insertAdjacentElement('beforeend', newItem)
});
