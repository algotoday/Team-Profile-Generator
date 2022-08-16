const Intern = require('../lib/Intern');

test('creates an intern object off of the Employee parent object', () => {
    const intern = new Intern('John', 345, 'John123@gmail.com', '2University');

    expect(intern.school).toBe('2University');
});

test('gets an interns school', () => {
    const intern = new Intern('John', 345, 'John123@gmail.com', '2University');

    expect(intern.getSchool()).toBe('2University');
});

test('gets an interns role', () => {
    const intern = new Intern('John', 345, 'John123@gmail.com', '2University');

    expect(intern.getRole()).toBe('Intern');
});