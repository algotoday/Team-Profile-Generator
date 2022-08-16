const Employee = require('../lib/Employee');

test('creates an employee object', () => {

    const employee = new Employee('Jared', 123, 'jared123@gmail.com', 'Employee');

    expect(employee.name).toBe('Jared');
    expect(employee.id).toEqual(123);
    expect(employee.email).toBe('jared123@gmail.com');
    expect(employee.role).toBe('Employee')
});

test('gets employees name', () => {

    const employee = new Employee('Jared', 123, 'jared123@gmail.com');

    expect(employee.getName()).toEqual('Jared');
});

test('gets employees id', () => {

    const employee = new Employee('Jared', 123, 'jared123@gmail.com');

    expect(employee.getId()).toEqual(123);
});

test('gets employees email', () => {

    const employee = new Employee('Jared', 123, 'jared123@gmail.com');

    expect(employee.getEmail()).toEqual('jared123@gmail.com');
});

test('gets employees role', () => {

    const employee = new Employee('Jared', 123, 'jared123@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});