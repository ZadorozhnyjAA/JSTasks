function replaceUndefined(q){
  if (typeof(q) == 'undefined') {
      q = null;
      return q;} else {return q;}
  }
  
  function solution(x,y) {
      let res = [];
      let j = 0;
      let n = 0;
      if (x.length > y.length) { 
          j = x.length - 1} else {j = y.length - 1};
          for (; j >= 0; j--){
              res[j] = n + replaceUndefined(x[j]) + replaceUndefined(y[j]);
              if (res[j] >= 10) {n = 1; res[j] = res[j] - 10} else n=0;
           
      }
      return res; 
  }
    
  let x = [];
  let y = [];
  console.log(solution(x,y));