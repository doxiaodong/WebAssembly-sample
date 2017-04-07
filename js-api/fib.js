function fibFn(n) {
  if (n < 2) {
    return 1;
  }
  return fibFn(n - 2) + fibFn(n - 1);
}
