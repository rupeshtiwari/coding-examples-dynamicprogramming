/**
 * Dynamic programming is not required for factorial problem
 * Since we are not repeating any calculation here.
 */

class Factorial {
  execute(num) {
    if (num === 0 || num === 1) return 1;

    let result = 1;
    for (let idx = 1; idx <= num; idx++) {
      result *= idx;
    }

    return result;
  }
}

describe('Factorial', () => {
  it('should work #1', () => {
    var start = performance.now();
    expect(new Factorial().execute(5)).toBe(120);
    var end = performance.now();
    console.log('Iterative', end - start);
  });
  it('should work #2', () => {
    var start = performance.now();
    expect(new Factorial().execute(3)).toBe(6);
    var end = performance.now();
    console.log('Iterative', end - start);
  });
});
