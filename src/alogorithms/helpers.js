const cmd = ['MOVE', 'SWAP', 'ORIGIN', 'END', 'PNT', 'MIN'];

export function bubbleSortHelper(arr, trace){

    for(let i=arr.length-1; i>=0; --i){
        for(let j=0; j<i; ++j){
            trace.push([j, j+1, cmd[0]]);
            trace.push([j, j+1, cmd[0]]);

            if(arr[j] > arr[j+1]){
                trace.push([j, j+1, cmd[1]]);
                swap(arr, j, j+1);
            }else{
                trace.push([j, arr[j], cmd[2]]);
            }
        }
        trace.push([i, arr[i], cmd[3]]);
    }
    return trace;
}


export function seletionSortHelper(arr, trace){

    for(let i=0; i<arr.length; ++i){
        let minIndex = i;
        trace.push([i, arr[i], cmd[4]]);
        for(let j=i+1; j<arr.length; ++j){
            trace.push([j, arr[j], cmd[0]]);

            if(arr[j] < arr[minIndex]){
                trace.push([j, minIndex, cmd[5]]);
                minIndex = j;
            }else{
                trace.push([j, arr[j], cmd[2]]);
            }
        }
        if(minIndex !== i){
            swap(arr, i, minIndex);
        }
        trace.push([minIndex, i, cmd[1]]);
    }
    return trace;

}


function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

