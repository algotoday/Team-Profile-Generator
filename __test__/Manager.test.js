const Manager = require('../lib/Manager');

test('creates a manager object off of the Employee parent object', () => {
    const manager = new Manager('Jared', 123, 'jared123@gmail.com', 1);
    
    expect(manager.officeNumber).toEqual(1);
});

test('gets an employees role', () => {
    const manager = new Manager('Jared', 123, 'jared123@gmail.com', 1);

    expect(manager.getRole()).toEqual('Manager')
});