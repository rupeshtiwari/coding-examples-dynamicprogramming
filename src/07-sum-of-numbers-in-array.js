/**
 * Given the target value N and an array of allowed numbers, count ways to write N as the sum of those numbers.
 */

class SumOfNumbers {
  execute(nums, target) {
    let dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (let idx = 1; idx <= target; idx++) {
      for (let num of nums) {
        if (idx - num < 0) {
          break;
        }
        dp[idx] += dp[idx - num];
      }
    }
    return dp[target];
  }
}

describe('SumOfNumbers', () => {
  it('should work #1', () => {
    var start = performance.now();
    expect(new SumOfNumbers().execute([1, 2, 3], 4)).toBe(7);
    var end = performance.now();
    console.log('Iterative', end - start);
  });
});
