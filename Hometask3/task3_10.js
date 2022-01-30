"use strict";
const arr = [3, 2, 1];
function reverse ( arr ) {
    if (!Array.isArray(arr)) {throw new Error ( 'Error: it is not an array ' )};
    if (arr.length === 0) {throw new Error ( `Error: parametr can't be an empty` )};
    let res = [];
    let n = 0;
    for (let i = (arr.length-1); i >= 0; i--) {
        res[n] = arr[i];
        n++;
    }
    return res;
}

console.log(reverse(arr));