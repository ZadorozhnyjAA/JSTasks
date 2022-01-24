function solution(x,y) {
  var res = [];
  var l = [];
  var m = [];
  var j = 0;
  if (x.length > y.length) {
    j = x.length;
    k = x.length - y.length;
    l = x;
    m = y;
  } else {
    j = y.length;
    k = y.length - x.length;
    l = y;
    m = x;
  };
  for (; j >= 0; j--){
    z[j] = n + l[j] + k[j];
    
  }
return res; 
}

var x = [2, 4, 3];
var y = [5, 6, 4];
var z=Number(x[5]) + 4;
console.log(z);