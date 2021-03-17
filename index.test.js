const {isPrime, findEven, findLargestEven} = require('./index');
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