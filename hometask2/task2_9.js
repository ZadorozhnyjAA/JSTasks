function solution(x,y) {            
    function replaceUndefined(q){                                                   //проверка на наличие пустых элементов массива
    if (typeof(q) == 'undefined') {
        q = null;
        return q;
    } else {return q;}
    };

    let res = [];
    let j = 0;
    let n = 0;
    if (x.length > y.length) { 
        j = x.length - 1} else {j = y.length - 1};                                  //цикл повторяем по кол-ву элементов в более длинном массиве
        for (; j >= 0; j--){
            res[j] = n + replaceUndefined( x.pop() ) + replaceUndefined( y.pop() ); //элемент нового массива получим как сумму последних элементов массивов и единицы, если предыдущая сумма была больше 10
            if (res[j] >= 10) {n = 1; res[j] = res[j] - 10} else {n=0};
            if ((j === 0) && (n===1)) res.unshift(1);                               //если более длинный массив закончился, но предыдущий элемент был больше 10, добавим еще один эелемент равный 1
    }
    return res; 
}
      
console.log(solution([2, 4, 3], [5, 6, 4])); // [8, 0, 7]
console.log(solution([1, 4, 5], [4, 4, 2])); // [5, 8, 7]
console.log(solution([1, 1, 1], [])); // [1, 1, 1]
console.log(solution([], [9, 9, 9])); // [9, 9, 9]
console.log(solution([9,9,9], [9,9,9])); // [1, 9, 9, 8]
console.log(solution([], [])); // []
console.log(solution([], [0])); // [0]
console.log(solution([0], [0])); // [0]
console.log(solution([1,1,1,1,1,1,1,1], [1, 0])); // [1, 1, 1, 1, 1, 1, 2, 1]
console.log(solution([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],[1]));
// // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
