const Engineer = require('../lib/Engineer');

test('creates an engineer object off of the Employee parent object', () => {
    const engineer = new Engineer('Tammy', 1402, 'Tammy1402@email.com', 'tammygoth');
    
    expect(engineer.github).toBe('tammygoth');
});

test('gets an employees role', () => {
    const engineer = new Engineer('Tammy', 1402, 'Tammy1402@email.com', 'tammygoth');

    expect(engineer.getRole()).toEqual('Engineer');
});

test('gets an engineers github', () => {
    const engineer = new Engineer('Tammy', 1402, 'Tammy1402@email.com', 'tammygoth');

    expect(engineer.getGithub()).toEqual('tammygoth');
});
