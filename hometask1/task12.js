var arr = [1, 2, 3, -5, -2, 1, -4];
for (var i = 0, sum = 0; i < arr.length; i++) {
    if ( (arr[i] > 0) ) sum += arr[i];
}
console.log(sum);