function getDivisors(x) {
    var arr = [];
    if ( typeof (x) !== 'number') {throw new Error ( 'Error: parametr type is not a number' )}; 
    if ( x <= 0 ) {throw new Error ( `Error: parametr can't be <=0` )};
    for (i = 1; i<= x; i++) {
        if(x % i === 0) {arr.push(i)};
    }
return arr;
}
console.log(getDivisors(12));