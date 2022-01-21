var arr = [1, 2, 3];
function f (arr) {
    if (!Array.isArray(arr)) {throw new Error ( 'Error: parametr type shoul be an array' )};
    if (arr == 0) {throw new Error ( `Error: parametr can't be an empty` )};
    var i = arr.length;
    function rec (arr[i]) {
        if (i>0) {
            console. log(arr[i]); 
            rec(arr[i-1]);
        }
    }
    console.log(f(i));
}
f(arr);