"use strict";
function arrayFill ( value, length ) {
    let arr = [];
    if ((typeof(value) === "undefined") || (typeof(length) === "undefined") ) {throw new Error ( `Error: parametr can't be an empty` )};
    if ((typeof(value) !== "string") && (typeof(value) !== "number") && (typeof(value) !== "object") || (Array.isArray(value)) ) {throw new Error ( 'Error: value must be a number, string, object or array ' )};
    if (typeof(length) !== "number") {throw new Error ( 'Error: length is not a number ' )};
    for (let i = 0 ; i < length; i++) {
        arr[i] = value;
    }
    return arr;
}

console.log(arrayFill('x',5));