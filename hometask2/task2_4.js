function f(x) {   
  function ChekArgInRange(){
      if ( typeof (x) !== 'number') {throw new Error ( 'Error: parametr type is not a number' )} else 
          if ( (x > 7) || (x<1) ) {throw new Error ( 'Error: parametr should be in range of 1 to 8' )}
      
  }
ChekArgInRange(x);                                         //Проверка аргументов - числа и в диапазоне или нет
var week = ['Понедельник', 'Вторник', 'Среда','Четверг', 'Пятница', 'Суббота', 'Воскресенье'];    
return week[x-1];
}
console.log( f(6) );