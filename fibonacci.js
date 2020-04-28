function fib(num) {
  if (num <= 1) return 1;

  return fib(num - 1) + fib(num - 2);
}

const num = process.argv.slice(2);

console.log(fib(num));
