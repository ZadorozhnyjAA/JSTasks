function f(a) {
    if (typeof a  === 'number') {
    var b = a ** 3; 
    return b;
    }
    else {
        throw new Error ( 'Error: parametr type is not a number' )
    }
}
console.log( f(2) );