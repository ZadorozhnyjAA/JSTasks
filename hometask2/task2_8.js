var arr = [1, 2, 3, 4];
function f (arr) {
    if (!Array.isArray(arr)) {throw new Error ( 'Error: parametr type shoul be an array' )};
    if (arr == 0) {throw new Error ( `Error: parametr can't be an empty` )};
    var i = arr.length - 1;
    function rec (arr) {        
        if (i > 0) {
            console.log(arr[i]); 
            --i;
            rec(arr);
        }
    }
    rec(arr);
}
f(arr);