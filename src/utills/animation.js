
let delay = 300;
let isPause = false;
window.onload = () => {
const speedInput = document.querySelector('.speed-input');
speedInput.addEventListener('input', ({target}) => {
    delay = speedInput.max - target.value;
    //console.log(speed);
});

// const pause = document.querySelector('.pause-button');
// pause.addEventListener('click', () => isPause  = true);
// const restart = document.querySelector('.restart-button');
// restart.addEventListener('click', () => isPause = false);



}



// TODO: timer pause, restart 기능 구현 
var timerID;
var timeout;
var remain = delay;
var start;
function timer() {

    return new Promise((resolve) => {
        if(!isPause){
            //start = Date.now();
            clearInterval(timerID);
            timerID = setInterval(resolve, delay);
        }else{
            clearInterval(timerID);
            timerID = null;
            //remain = Date.now() - start; 
            timeout = setTimeout(() => {
                timerID = setInterval(resolve, delay);
            }, 10000);
            // console.log(Date.now());
        }
        console.log(isPause);
    })
}


export default timer;