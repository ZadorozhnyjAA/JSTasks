"use strict";
function f ( arr ) {
    if (!Array.isArray(arr)) {throw new Error ( 'Error: it is not an array ' )};
    if ((typeof(arr) == "undefined") || (arr.length === 0)) {throw new Error ( `Error: parametr can't be an empty or empty array` )};
    let resArr = [], res = 0;
    resArr = arr.flat(Infinity);
    for (let i = 0 ; i < resArr.length; i++) {
        if (typeof(resArr[i]) !== "number") {throw new Error ( 'Error: it is not a number' )};
        res += resArr[i];
    }
return res;

}

const arr = [[[1,2],[1,2]],[[2,1],[1,2]]];
console.log(f(arr));
const arr2 = [[[[[1,2]]]]];
console.log(f(arr2));
const arr3 = [[[[[1,2]]],2],1];
console.log(f(arr3));
const arr4 = [[[[[]]]]];
console.log(f(arr4));
const arr5 = [[[[[],3]]]];
console.log(f(arr5));