class ClimbingStairCase {
  execute(num, max = 2) {
    if (num === 0 || num === 1) return 1;

    let previous0 = 1;
    let previous1 = 1;
    let result = 1;
    for (let idx = 2; idx <= num; idx++) {
      result = previous1 + previous0;
      previous0 = previous1;
      previous1 = result;
    }
    return result;
    }
    
    

}

describe('ClimbingStairCase', () => {
  it('should work #1', () => {
    var start = performance.now();
    expect(new ClimbingStairCase().execute(4)).toBe(5);
    var end = performance.now();
    console.log('Iterative', end - start);
  });
  it('should work #2', () => {
    var start = performance.now();
    expect(new ClimbingStairCase().execute(3)).toBe(3);
    var end = performance.now();
    console.log('Iterative', end - start);
  });
});
