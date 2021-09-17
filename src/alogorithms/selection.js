
import { seletionSortHelper } from './helpers.js';

export default function selectionSort(data) {
    console.log("selectionSort generated...");

    if(data.length <= 1) return data;

    const trace = [];
    const copy = [...data];

    seletionSortHelper(copy, trace);

    return trace;
}

