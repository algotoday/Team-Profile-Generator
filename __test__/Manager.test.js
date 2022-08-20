const Manager = require('../lib/Manager');

test('creates a manager object off of the Employee parent object', () => {
    const manager = new Manager('Dave', 256, 'dave256@gmail.com', 25);
    
    expect(manager.office).toEqual(25);
});

test("gets an employees' role", () => {
    const manager = new Manager('Dave', 256, 'dave256@gmail.com', 25);

    expect(manager.getRole()).toEqual('Manager');
});