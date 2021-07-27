class FibonacciRecursive {
  constructor() {
    this.cache = {};
  }

  executeWithCache(num, canCache = true) {
    if (canCache) {
      if (this.cache[num] != null) return this.cache[num];
    }

    var result;

    if (num === 0 || num === 1) {
      result = 1;
    } else {
      result = this.executeWithCache(num - 1) + this.executeWithCache(num - 2);
    }

    if (canCache) {
      this.cache[num] = result;
    }

    return result;
  }
}

/**
 * RECOMMENDED IN COMPETETIVE PROGRAMMING
 */
class Fibonacci {
  /**
   * O(n) time | O(n) space
   */
  execute(num) {
    if (num === 0 || num === 1) return 1;

    let previous0 = 1;
    let previous1 = 1;

    let result = 0;
    let idx = 2;

    while (idx <= num) {
      result = previous0 + previous1;
      idx++;

      previous0 = previous1;
      previous1 = result;
    }

    return result;
  }
}

describe('Fibonacci', () => {
  it('should work #1', () => {
    var start = performance.now();
    expect(new Fibonacci().execute(100)).toBe(573147844013817200000);
    var end = performance.now();
    console.log('Iterative', end - start);
  });
  it('should work #1', () => {
    var start = performance.now();
    expect(new Fibonacci().execute(3)).toBe(3);
    var end = performance.now();
    console.log('Iterative', end - start);
  });
});

describe('Fibonacci Recursive With Cache', () => {
  it('should work #1', () => {
    var start = performance.now();
    expect(new FibonacciRecursive().executeWithCache(100)).toBe(
      573147844013817200000
    );
    var end = performance.now();
    console.log('With Cache', end - start);
  });
  it('should work #1', () => {
    var start = performance.now();
    expect(new FibonacciRecursive().executeWithCache(3)).toBe(3);
    var end = performance.now();
    console.log('With Cache', end - start);
  });
});

describe('Fibonacci Recursive Without Cache', () => {
  it('should work #1', () => {
    var start = performance.now();
    expect(new FibonacciRecursive().executeWithCache(100, false)).toBe(
      573147844013817200000
    );
    var end = performance.now();
    console.log('Without Cache', end - start);
  });
});
