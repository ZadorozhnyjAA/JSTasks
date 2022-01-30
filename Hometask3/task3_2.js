"use strict";
const arr = [1, 2, 3];
function filter ( arr, f ) {
    if ((typeof(arr) == "undefined") || (typeof(f) == "undefined")) {throw new Error ( `Error: parametr can't be an empty` )};
    if (!Array.isArray(arr)) {throw new Error ( 'Error: it is not an array ' )};
    if (typeof(f) !== "function") {throw new Error ( 'Error: it is not a function ' )};    
    let res=[];
    let n=0;
    for (var i = 0; i < arr.length; i++) {
        if (f(arr[i], i, arr)) {
            res[n]=arr[i];
            n++;
        }    
    }
    return res;
}

console.log(filter(arr, (item, i, arr) => i < 2));