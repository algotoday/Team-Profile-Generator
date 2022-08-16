const Engineer = require('../lib/Engineer');

test('creates an engineer object off of the Employee parent object', () => {
    const engineer = new Engineer('Alec', 2, 'Alec123@github.com', 'AlecGH123');
    
    expect(engineer.github).toBe('AlecGH123');
});

test('gets an employees role', () => {
    const engineer = new Engineer('Alec', 2, 'Alec123@github.com', 'AlecGH123');

    expect(engineer.getRole()).toEqual('Engineer')
});

test('gets an engineers github', () => {
    const engineer = new Engineer('Alec', 2, 'Alec123@realemail.com', 'AlecGH123');

    expect(engineer.getGithub()).toEqual('AlecGH123')
});
