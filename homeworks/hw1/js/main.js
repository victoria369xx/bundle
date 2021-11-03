import { showError } from "./output.js";
import  calcDatesDiff  from "./calcDatesDiff.js";
import { showResult } from "./output.js";
import "./timer.js"
import "./tabSwitch.js"

const form = document.getElementById('calcDate');

form.onsubmit = function (event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const dateFrom = formData.get('dateFrom');
    const dateTo = formData.get('dateTo');

  if(!dateFrom || !dateTo){
    showError('ошибка');

    return
  } else {
   const datesDiff = calcDatesDiff(dateFrom, dateTo);
   showResult(datesDiff)
  }
};