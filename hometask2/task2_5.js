var arr = [1, 2, -4, 3, -9, -1, 7];   // ---> [1, 2, 3, 7]
var arrnew = [];
function isPositive(x){
    if ( typeof (x) !== 'number') {throw new Error ( 'Error: parametr type is not a number' )} else 
        if ( x > 0 ) return true; else if ( x < 0 ) return false;
}
for (i=0; i< arr.length; i++) {
    if (isPositive(arr[i])) arrnew.push(arr[i]);
}
console.log (arrnew);