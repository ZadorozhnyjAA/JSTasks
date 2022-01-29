"use strict";
const arr = [1, 2, 3];
function foreach ( arr, f ) {
    if ((typeof(arr) == "undefined") || (typeof(f) == "undefined")) {throw new Error ( `Error: parametr can't be an empty` )};
    if (!Array.isArray(arr)) {throw new Error ( 'Error: it is not an array ' )};
    if (typeof(f) !== "function") {throw new Error ( 'Error: it is not an function ' )};    
    
    for (var i = 0; i < arr.length; i++) {
        f(arr[i], i, arr);
    }
}
foreach(arr, (item, i, arr) => {
    console.log(`${item} на позиции ${i} в ${arr}`)
})
foreach(arr,console.log);