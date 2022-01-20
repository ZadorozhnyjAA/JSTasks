function f(x,y,z) {
    var b = 0;
    if (z === 0) { throw new Error ( 'Error: z = 0' ) } else {
        for (var i = 0; i < arguments.length; i++) {
                if ( typeof (arguments[i]) !=== 'number') {
                    throw new Error ( 'Error: parametr type is not a number' ) } else {
                        b = (x-y)/z;  
                    }
        }
    }
    return b;

}
console.log( f(2,4,9) );