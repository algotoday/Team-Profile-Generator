const Intern = require('../lib/Intern');

test('creates an intern object off of the Employee parent object', () => {
    const intern = new Intern('Ralph', 777, 'ralph777@gmail.com', 'College');

    expect(intern.school).toBe('College');
});

test('gets an interns school', () => {
    const intern = new Intern('Ralph', 777, 'ralph777@gmail.com', 'College');

    expect(intern.getSchool()).toBe('College');
});

test('gets an interns role', () => {
    const intern = new Intern('Ralph', 777, 'ralph777@gmail.com', 'College');

    expect(intern.getRole()).toBe('Intern');
});