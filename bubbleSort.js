function bubbleSort(arr) {
    for(let i =0; i< arr.length; i++) {
        // to keep track, if swap happened, in case swap hasn't happened in this iteration, then, we can stop the loop as 
        // array is sorted now
        let swapped = false; 
        for(let j=0; j<arr.length -1; j++) {
            if(arr[j] > arr[j+1]) { // assuming ascending sort
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                swapped = true;
            }
        }
        if(!swapped) {
            console.log(i);
            break;
        }
    }
}

var arr = [3,4,3,7,10,33,9,5]

bubbleSort(arr)
