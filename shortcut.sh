echo "function fib(num) {
  var n = parseInt(num);

  let arr = [0,1]

  var i;
  for (i = 2; i < (n + 2); i++ ) {
    arr.push(arr[i-1] + arr[i-2]);
  }

  return arr[n+1];
}

const num = process.argv.slice(2);

console.log(fib(num));
" > fibonacci.js
