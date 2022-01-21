function f() {
    var b = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (typeof (arguments[i])  === 'number') {
        b += arguments[i];  
        } else {
            throw new Error ( 'Error: parametr type is not a number' )
        }
    }
    return b;
}
console.log( f(2,4,9) );