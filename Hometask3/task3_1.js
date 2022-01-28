const arr = [1, 2, 3];
function foreach ( arr, f ) {
    if (!Array.isArray(arr)) {throw new Error ( 'Error: it is not an array ' )};
    if (typeof(f) !== "function") {throw new Error ( 'Error: it is not an function ' )};
    if ((arr == "undefined") && (f == "undefined")) {throw new Error ( 'Error: it is not an function ' )};
}
foreach(arr, (arr[1],arr[2]));
