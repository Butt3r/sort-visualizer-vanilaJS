
import bubbleSort from './alogorithms/bubble.js';
import selectionSort from './alogorithms/selection.js';
import { bubbleSortVisualize, selectionSortVisulaize } from './utills/visualize.js';


const $target = document.querySelector('#app');

let state = {
    array: [],
    toggle: false,
};

function init() {

    const utilWrapper = document.createElement('div');
    utilWrapper.className = 'util-wrapper';
    const generateBtn = document.createElement('button');
    generateBtn.className = 'generate-button';
    generateBtn.innerHTML = 'new Array';
    const input = document.createElement('input');
    input.className = 'speed-input';
    input.type = 'range';
    input.min = '100';
    input.max = '999';
    input.value = `${input.max - 300}`;
    const selectionBtn = document.createElement('button');
    selectionBtn.className = 'selection-button';
    selectionBtn.innerHTML = 'selection sort';
    const bubbleBtn = document.createElement('button'); 
    bubbleBtn.className = 'bubble-button';
    bubbleBtn.innerHTML = 'bubble sort';
    const animationWrapper = document.createElement('div');
    animationWrapper.className = 'animation-wrapper';
    const pauseBtn = document.createElement('button');
    pauseBtn.className = 'pause-button';
    pauseBtn.innerHTML = 'pause';
    const restartBtn = document.createElement('button');
    restartBtn.className = 'restart-button';
    restartBtn.innerHTML = 'restart';


    utilWrapper.appendChild(generateBtn);
    utilWrapper.appendChild(input);
    utilWrapper.appendChild(selectionBtn);
    utilWrapper.appendChild(bubbleBtn);
    animationWrapper.appendChild(pauseBtn);
    animationWrapper.appendChild(restartBtn);
    $target.appendChild(utilWrapper);
   // $target.appendChild(animationWrapper);    
   
    generateBtn.addEventListener('click', generateArray);
    utilWrapper.addEventListener('click', ({target}) => {
        //disable();
        if(target.matches('.selection-button')) {
            let trace = selectionSort(state.array);
            selectionSortVisulaize(trace, 255);
        }
        if(target.matches('.bubble-button')) { 
            let trace = bubbleSort(state.array);
            bubbleSortVisualize(trace, 255);
        }
    });

    generateArray();
    
}



function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateBar() {

    if(state.toggle){
        $target.removeChild(document.querySelector('.bar-container')); 
    }

    const barContainer = document.createElement('section');
    barContainer.className = 'bar-container';

    for(let i=0; i<state.array.length; ++i){

        const barVal = state.array[i];
        const barHeight = Math.floor(barVal * 3);
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${barHeight}px`;
       
        const barData = document.createElement('span');
        barData.className = 'bar-data';
        barData.innerHTML = barVal;
        barData.style.top = `${barHeight+10}px`;
        
        bar.appendChild(barData);
        barContainer.appendChild(bar);
    }
    $target.appendChild(barContainer);
    state.toggle = true;
}


function generateArray() {
    console.log("Array generated...");
    const arr = [];

    let barNum = 30;
    for(let i=0; i<barNum; ++i){
        arr.push(randNum(1, 99));
    };
    state.array = [...arr];
    generateBar();
}



init();