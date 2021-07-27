class ClimbingStairCaseAtmostKsteps {
  execute(num, k) {
    if (num === 0 || num === 1) return 1;


  }
}

xdescribe('Climbing Stairs Atmost K steps', () => {
  it('should work #1', () => {
    var start = performance.now();
    expect(new ClimbingStairCaseAtmostKsteps().execute(4)).toBe(5);
    var end = performance.now();
    console.log('Iterative', end - start);
  });
  it('should work #2', () => {
    var start = performance.now();
    expect(new ClimbingStairCaseAtmostKsteps().execute(3)).toBe(3);
    var end = performance.now();
    console.log('Iterative', end - start);
  });
});
