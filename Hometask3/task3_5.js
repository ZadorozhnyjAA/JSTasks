"use strict";
const arr = [1, 2, 3];
const acc = 0;
function reduce ( arr, f, acc ) {
    if ((typeof(arr) === "undefined") || (typeof(f) === "undefined") || (typeof(acc) === "undefined")) {throw new Error ( `Error: parametr can't be an empty` )};
    if ((typeof(acc) !== "string") && (typeof(acc) !== "number"))  {throw new Error ( 'Error: it is not a number or a string ' )};
    if (!Array.isArray(arr)) {throw new Error ( 'Error: it is not an array ' )};
    if (typeof(f) !== "function") {throw new Error ( 'Error: it is not a function ' )};    
    let res;
    for (let i = 0; i < arr.length; i++) {
        acc = f(acc, arr[i], i, arr);
    }
    return acc;
}

console.log(reduce(arr, ((acc, item, i, arr) => (acc+item)), acc));