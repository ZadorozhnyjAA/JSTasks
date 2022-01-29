"use strict";
const arr = [1, 2, 3];
function foreach ( a, f ) {
    if ((typeof(a) == "undefined") || (typeof(f) == "undefined")) {throw new Error ( `Error: parametr can't be an empty` )};
    if (!Array.isArray(a)) {throw new Error ( 'Error: it is not an array ' )};
    if (typeof(f) !== "function") {throw new Error ( 'Error: it is not an function ' )};    
    
    for (var i = 0; i < a.length; i++) {
        arguments[0] = a[i];
        arguments[1]=i;
        f(a[i], i, a);
    }
}
foreach(arr, (item, index, array) => {
    console.log(`${item} имеет позицию ${index} в ${array}`)
})