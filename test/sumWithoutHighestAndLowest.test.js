const sumWithoutHighestAndLowest = require('../src/sumWithoutHighestAndLowest.js');

// test cases

test ('sum is', () => {
    expect(sumWithoutHighestAndLowest([6, 2, 1, 8, 10])).toBe(16)
})
