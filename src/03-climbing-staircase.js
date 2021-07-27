class ClimbingStairCase {
  execute(num, max=2) {
    if (num === 0) return 1;

    let choice = 0;
    let result = 1;

    for (let idx = 0; idx <= num; idx++) {
      if (idx + 1 <= max) {
        choice++;
      }
      if (idx + 2 <= max) {
        choice++;
      }

      result *= choice;
    }

    return result;
  }
}

describe('ClimbingStairCase', () => {
  it('should work #1', () => {
    var start = performance.now();
    expect(new ClimbingStairCase().execute(4)).toBe(162);
    var end = performance.now();
    console.log('Iterative', end - start);
  });
  it('should work #2', () => {
    var start = performance.now();
    expect(new ClimbingStairCase().execute(3)).toBe(54);
    var end = performance.now();
    console.log('Iterative', end - start);
  });
});
