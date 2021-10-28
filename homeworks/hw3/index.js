import './style.scss'

const imgCards = [
    {img:'./images/forrest.jpeg', title:'Лес'},
    {img:'./images/lake.jpg', title:'Озеро'},
    {img:'./images/mountains.jpg', title:'Горы'}
  ];
  const renderImgCard = (img, title) => `<div class="card">
  <img src="${img}" alt="фото">
  <h3>${title}</h3>
  </div>`;

  const renderImgCardsList = list => {
    let  imgCardsList = list.map(card => renderImgCard(card.img, card.title));
    document.querySelector('.cards').innerHTML = imgCardsList.join('');
  }

  renderImgCardsList(imgCards);
