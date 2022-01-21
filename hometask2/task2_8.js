var arr = [1, 2, 3];
function f (arr) {
    if (!Array.isArray(arr)) {throw new Error ( 'Error: parametr type should be an array' )};
    if (arr == 0) {throw new Error ( `Error: parametr can't be an empty` )};
    var i = arr.length - 1;
    function rec (arr) {        
        if (i > -1) {
            console.log(arr[i]); 
            i--;
            rec(arr);
        }
    }
    rec(arr);
}
f(arr);