const { expect } = require('@jest/globals');
const sum = require('./sum');

test('should add defined numbers', () => {
    expect(
        sum(1,2)
    ).toEqual(3)
})
