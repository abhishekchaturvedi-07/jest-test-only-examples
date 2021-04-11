const { expect } = require('@jest/globals')
const functions = require('./functions')

test('should return addition of number', () => {
    expect(
        functions.add(1, 2)
    ).toEqual(3)
})
