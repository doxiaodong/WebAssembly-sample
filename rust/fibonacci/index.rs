fn fib(n: u32) -> u32 {
  if (n < 2) {
    return 1
  }
  return fib(n - 2) + fib(n - 1)
}
