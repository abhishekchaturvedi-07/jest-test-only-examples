const { expect } = require('@jest/globals')
const functions = require('./functions')

//toEqual
test('should return addition of number', () => {
    expect(
        functions.add(1, 2)
    ).toEqual(3)
})

//toBeNull
test('should return Null', () => {
    expect(
        functions.isNull()
    ).toBeNull()
})

//toBeFalsy
test('should be falsy', () => {
    expect(
        functions.checkValue(null)
    ).toBeFalsy()
})

test('should be Abhishek Chaturvedi', () => {
    expect(
        functions.createUser()
    ).toEqual({
        firstName: 'Abhishek',
        lastName: 'Chaturvedi'
    })
})



