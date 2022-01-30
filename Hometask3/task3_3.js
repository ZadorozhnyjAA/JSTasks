"use strict";
const arr = [1, 2, 3];
function every ( arr, f ) {
    if ((typeof(arr) == "undefined") || (typeof(f) == "undefined")) {throw new Error ( `Error: parametr can't be an empty` )};
    if (!Array.isArray(arr)) {throw new Error ( 'Error: it is not an array ' )};
    if (typeof(f) !== "function") {throw new Error ( 'Error: it is not a function ' )};    
    for (var i = 0; i < arr.length; i++) {
        if (!f(arr[i], i, arr)) {                    
            return false;
        }    
    }
    return true;
}

console.log(every(arr, (item, i, arr) => item < 2));