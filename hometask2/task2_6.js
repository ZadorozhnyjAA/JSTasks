function isEven(x){
    if ( typeof (x) !== 'number') {
    throw new Error ( 'Error: parametr type is not a number' );
    } else if ( x % 2 === 0 ) {
    return true
    } else return false;
}
console.log(isEven(8));