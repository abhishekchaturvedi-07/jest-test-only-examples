
const { expect } = require('@jest/globals')
const functions = require('./functions')

//toBe
test('should return addition of number', () => {
    expect(
        functions.add(1, 2)
    ).toBe(3)
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

//toEqual
test('should be Abhishek Chaturvedi', () => {
    expect(
        functions.createUser()
    ).toEqual({
        firstName: 'Abhishek',
        lastName: 'Chaturvedi'
    })
})

//LEss than and greater than
test('should be under 100', () => {
    const num1 = 9;
    const num2 = 90;
    expect(num1 + num2).toBeLessThan(100)
})

//regex
test('should be reges', () => {
    expect('Abhishek').not.toMatch(/C/)
})

//arrays
test('should be in array', () => {
    const users = ['Abhishek', 'Rocky']
    expect(users).toContain('Rocky')
})

//working with async data from axios
test('user fetched name should be  Leann Graham', () => {
    expect.assertions(1)
    return functions.fetchUSer().then(
        data => {
            expect(data.name).toEqual('Leanne Graham')
        }
    )
})





