const paragraph = document.getElementById('output');

export function showError (errorText){
    paragraph.innerHTML = errorText;
}

const showResult = ({years, months, days})=>{
    paragraph.innerHTML = `
   Лет: ${years}
    Месяцев: ${months}
    Дней: ${days}
    `
}

export {showResult}