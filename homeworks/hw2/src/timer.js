import {sound} from './howler.js'; 
//input
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

//controls
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
//output
const minutesEl = document.getElementById('minutesEl');
const secondsEl = document.getElementById('secondsEl');
const timeCounterEl = document.getElementById('timeCounter');

var interval;

startBtn.addEventListener('click', ()=> {
    let minutes = Number(minutesInput.value);
    let seconds = Number(secondsInput.value);
    
    interval = setInterval (()=> {
        minutesInput.value = minutes;
        secondsInput.value = --seconds ;
    
        if (minutes < 10) {
            minutesInput.value = `0${minutes}`;
        } else {
            minutesInput.value = minutes;
        }
    
        if (seconds < 10) {
            secondsInput.value = `0${seconds}`;
        } else {
            secondsInput.value = seconds;
        }
        if(seconds == 0) {
            seconds = 59;
            --minutes;
            if(minutes < 0) {
                clearInterval(interval)
                sound.play();
                }
        } 
    }, 1000)

});

pauseBtn.addEventListener ('click', ()=>{
    clearInterval(interval);
});

resetBtn.addEventListener('click', ()=> {
    clearInterval(interval);
    minutesInput.value = null;
    secondsInput.value = null;
})
