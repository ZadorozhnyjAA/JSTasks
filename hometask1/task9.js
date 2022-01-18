var arr = [1,2,3,4,5,6];
var temp = 0;
for (var i = 0; i < arr.length; i++) {
    for (j = 0; j< arr.length; j++) {
        if (arr[i] < arr[j]) {
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            console.log('temp', temp);
            console.log(arr[j]);
            console.log(arr[i]);
        }
    
    }
}
console.log(arr);