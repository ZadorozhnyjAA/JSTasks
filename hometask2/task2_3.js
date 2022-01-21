function f(x,y,z) {   
    function ChekNumber(){
        for (var i = 0; i < arguments.length; i++) {
            if ( typeof (arguments[i]) !== 'number') throw new Error ( 'Error: parametr type is not a number' );
        }
    }
    if (z === 0) { throw new Error ( 'Error: divider = 0' ) } else {   //Проверка делителя - не ноль?
            ChekNumber(x,y,z);                                         //Проверка аргументов - числа?
            return((x-y)/z);            
    }
}
console.log( f(6,3,1) );