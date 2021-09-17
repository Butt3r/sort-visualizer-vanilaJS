import timer from "./animation.js";

const MOVE_COLOR = "#62d6c3";
const ORIGIN_COLOR = "#b162d6";
const PNT_COLOR = 'red';

let isSorted = false;

export async function bubbleSortVisualize(trace, i) {
    disable();
    for(let [curr, next, mark] of trace){
        const bars = [...document.querySelectorAll('.bar')];
        
        await timer();
        
        switch(mark){
            case 'MOVE':
            bars[curr].style.backgroundColor = MOVE_COLOR;
            bars[next].style.backgroundColor = MOVE_COLOR;
            break;
            case 'SWAP':
            bars[curr].style.backgroundColor = ORIGIN_COLOR;
            bars[next].style.backgroundColor = ORIGIN_COLOR;
            let temp = bars[curr].style.height;
            bars[curr].style.height = bars[next].style.height;
            bars[next].style.height = temp;
            //await timer.run();
            break;
            case 'ORIGIN':
            bars[curr].style.backgroundColor = ORIGIN_COLOR;
            break;
            default :
            bars[curr].style.backgroundColor = `rgba(${155+(i-10)}, ${i-=10}, 210, 0.9)`;
            break;
        }
    }
    isSorted = true;
    disable();
} 



export async function selectionSortVisulaize(trace, i){
    disable();
    for(let [curr, next, mark] of trace){
        const bars = [...document.querySelectorAll('.bar')];
        await timer();

        switch(mark){
            case 'PNT':
            bars[curr].style.backgroundColor = PNT_COLOR;
            break;
            case 'MOVE':
            bars[curr].style.backgroundColor = MOVE_COLOR;
            break;
            case 'SWAP':
            bars[curr].style.backgroundColor = ORIGIN_COLOR;
            bars[next].style.backgroundColor = `rgba(${155+(i-10)}, ${i-=10}, 210, 0.9)`;
            let temp = bars[curr].style.height;
            bars[curr].style.height = bars[next].style.height;
            bars[next].style.height = temp;
           // await timer.run();
            break;
            case 'ORIGIN':
            bars[curr].style.backgroundColor = ORIGIN_COLOR;
            break;
            case 'MIN':
            bars[curr].style.backgroundColor = PNT_COLOR;
            bars[next].style.backgroundColor = ORIGIN_COLOR;
            break;
        }
    }
    isSorted = true;
    disable();
}

function disable() {
    console.log("disabled...");
    const btns = document.querySelectorAll('button');

    for(let i=0; i<btns.length; ++i){
        if(!btns[i].matches('.selection-button') && !btns[i].matches('.bubble-button')) continue;
        if(!isSorted){
        btns[i].disabled = true;
        btns[i].style.color = "rgba(103, 103, 103, 0.6)";
        }else{
        btns[i].disabled = false;
        btns[i].style.color = "rgba(245, 245, 245, 0.8)";
        }
    }
}