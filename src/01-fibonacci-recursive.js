class FibonacciRecursive {
  constructor() {
    this.cache = {};
  }

  execute(num) {
    if (num === 0 || num === 1) return num;

    const result = this.executeMemoize(num - 1) + this.executeMemoize(num - 2);

    return result;
  }

  executeMemoize(num) {
    if (num === 0 || num === 1) return num;

    if (this.cache[num] != null) return this.cache[num];

    const result = this.executeMemoize(num - 1) + this.executeMemoize(num - 2);

    this.cache[num] = result;

    return result;
  }
}

describe('FibonacciRecursive Recursive', () => {
  it('should work #1', () => {
    var start = performance.now();
    expect(new FibonacciRecursive().execute(100)).toBe(354224848179262000000);
    var end = performance.now();
    console.log('Recursive', end - start);
  });
  it('should work #2', () => {
    var start = performance.now();
    expect(new FibonacciRecursive().execute(3)).toBe(2);
    var end = performance.now();
    console.log('Recursive', end - start);
  });
  it('should work #3', () => {
    var start = performance.now();
    expect(new FibonacciRecursive().execute(5)).toBe(5);
    var end = performance.now();
    console.log('Recursive', end - start);
  });
});

describe('FibonacciRecursive Recursive Memoization', () => {
  it('should work #1', () => {
    var start = performance.now();
    expect(new FibonacciRecursive().executeMemoize(100)).toBe(
      354224848179262000000
    );
    var end = performance.now();
    console.log('Memoization Recursive', end - start);
  });
  it('should work #2', () => {
    var start = performance.now();
    expect(new FibonacciRecursive().executeMemoize(3)).toBe(2);
    var end = performance.now();
    console.log('Memoization Recursive', end - start);
  });
  it('should work #3', () => {
    var start = performance.now();
    expect(new FibonacciRecursive().executeMemoize(5)).toBe(5);
    var end = performance.now();
    console.log('Memoization Recursive', end - start);
  });
});
