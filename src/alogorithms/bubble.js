import { bubbleSortHelper }  from './helpers.js';

export default function bubbleSort(data) {
console.log("bubbleSort generated...");

if(data.length <= 1) return data;

const trace = [];
const copy = [...data];

bubbleSortHelper(copy, trace);

return trace;
}
