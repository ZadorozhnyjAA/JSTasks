var arr = [6, 5, 4, 3, 2, 1];
for (var i = 0; i < arr.length - 1; i++) {
    var control = true;
    for (var j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j+1]) {
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            control = false;
            }
    }
    if (control) break;
}
console.log(arr);