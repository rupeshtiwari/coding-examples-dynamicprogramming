/**
 * https://www.youtube.com/watch?v=uNqoQ0sNZCM&list=PL-Jc9J83PIiG8fE6rj9F5a6uyQ5WPdqKy&index=3
 */
class ClimbingStairCaseAtmostKsteps {
  execute(jumps) {
    /**
     * 1. state array of number of possible jumps
     * 2. direction - move from smaller to larger problem. So I will move from last to start of the array.
     * 3. Solve
     */
    const length = jumps.length;
    const dp = new Array(length).fill(0);
    dp[length] = 1;
    for (let idx = length - 1; idx >= 0; idx--) {
      for (let j = 1; j <= jumps[idx] && j + idx < dp.length; j++) {
        dp[idx] += dp[j + idx];
      }
    }
    return dp;
  }
}

describe('Climbing Stairs Atmost K steps', () => {
  it('should work #1', () => {
    var start = performance.now();
    expect(
      new ClimbingStairCaseAtmostKsteps().execute([3, 3, 0, 2, 2, 3])
    ).toEqual([8, 5, 0, 3, 2, 1, 1]);
    var end = performance.now();
    console.log('Iterative', end - start);
  });
});
