var n = 1000;
var num = 0;
do {
    n = n/2;
    num++;    
} while (n > 50);
console.log("Результат деления", n); 
console.log("Количество итераций", num);