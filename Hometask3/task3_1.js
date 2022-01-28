const arr = [1, 2, 3];
function foreach ( a, f ) {
    if ((typeof(a) == "undefined") || (typeof(f) == "undefined")) {throw new Error ( `Error: parametr can't be an empty` )};
    if (!Array.isArray(a)) {throw new Error ( 'Error: it is not an array ' )};
    if (typeof(f) !== "function") {throw new Error ( 'Error: it is not an function ' )};    
    var item;
    for (var i = 0; i++; i < a.length) {
        f(a[i]);
    }
}
var b = (item, i, a) => {
    console.log(`${item} имеет позицию ${i} в ${a}`)};
foreach(arr, b);