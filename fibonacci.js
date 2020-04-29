function fib(num) {
  if (num <= 1) return 1;

  return fib(num - 1) + fib(num - 2);
}

console.log("This is a bunch of text that a coworker added for no real reason");

const num = process.argv.slice(2);

console.log(fib(num));
