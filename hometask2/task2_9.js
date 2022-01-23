function f(x) {   
    function ChekArgInRange(){
        if ( typeof (x) !== 'number') {throw new Error ( 'Error: parametr type is not a number' )} else 
            if ( (x > 7) || (x<1) ) {throw new Error ( 'Error: parametr should be in range of 1 to 8' )}
        
    }
ChekArgInRange(x);                                         //Проверка аргументов - числа и в диапазоне или нет
    
switch (x) {
    case 1:
        console.log( 'Понедельник' );
      break;
    case 2:
        console.log( 'Вторник' );
      break;
    case 3:
        console.log( 'Среда' );
      break;
    case 4:
        console.log( 'Четверг' );
      break;
    case 5:
        console.log( 'Пятница' );
      break;
    case 6:
        console.log( 'Суббота' );
      break;
    case 7:
        console.log( 'Воскресенье' );
      break;
}
}
console.log( f(5) );