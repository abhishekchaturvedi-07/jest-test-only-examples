const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = {firstName: 'Abhishek'}
        user['lastName'] = 'Chaturvedi';
        return user;
    }
}


module.exports = functions