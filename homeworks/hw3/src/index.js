import './style.scss'

const imgCards = [
    {image:`forrest.jpeg`, title:'Лес'},
    {image:`lake.jpg`, title:'Озеро'},
    {image:`mountains.jpg`, title:'Горы'}
  ];
  const renderImgCard = (img, title) => `<div class="card">
  <img src='../src/assets/images/${img}' alt="фото">
  <h3>${title}</h3>
  </div>`;

  const renderImgCardsList = list => {
    let  imgCardsList = list.map(card => renderImgCard(card.image, card.title));
    document.querySelector('.cards').innerHTML = imgCardsList.join('');
  }

  renderImgCardsList(imgCards);
