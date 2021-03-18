const {findMaxAndAverage,findLargestPrimeFactor, isPrime, findEven, findLargestEven} = require('./index');
test('findEven should  return evens up to 8', async () => {
    expect(findEven(8)).toEqual([2,4,6,8]);
});
test('findEven should return evens up to 11', async () => {
    expect(findEven(11)).toEqual([2,4,6,8,10]);
});
test('findLargestEven should return 8632', async () => {
    expect(findLargestEven([3, 2, 8632, 2, 78, 6, 1, 94, 77, 8])).toBe(8632);
});
test('isPrime should return false', async () => {
    expect(isPrime(9)).toBe(false);
});

test('isPrime should return true', async () => {
    expect(isPrime(11)).toBe(true);
});

test('findLargestPrimeFactor should return 10', async () => {
    expect(findLargestPrimeFactor(10)).toBe(5);
});
test('findLargestPrimeFactor should return 17', async () => {
    expect(findLargestPrimeFactor(6936)).toBe(17);
});
test('findLargestPrimeFactor should return 0', async () => {
    expect(findLargestPrimeFactor(1)).toBe(0);
});

test('findMaxAndAverage should return 0', async () => {
    expect(findLargestPrimeFactor(1)).toBe(0);
});