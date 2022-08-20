const inquirer = require('inquirer');
const fs = require('fs');
const { originateProfile, createContainers } = require('./utils/originateProfile');

function promtMemberinfo() {
    inquirer
        .prompt([
        {
            type: 'input', 
            name: 'name',
            message: "What's the name of this team member?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                }
            }
            
        },
        {
            type: 'input', 
            name: 'id',
            message: "What's the ID of this team member?",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Please enter an id.');
                    return false;
                }
            }
            
        },
        {
            type: 'input', 
            name: 'email',
            message: "What's the email of this team member?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter an email.');
                    return false;
                }
            }          
        },
        {
            type: 'list',
            name: 'employee',
            message: 'What role does this employee play?',
            choices: ['Engineer', 'Manager', 'Intern']
        }
    ])
    .then(data => {
        switch(data.employee) {
            case 'Intern':
                promptIntern(data);
                break;
            case 'Engineer': 
                promptEngineer(data);
                break;
            case 'Manager':
                promptManager(data);
                break;
        };
    });
};

function promptManager(data) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: `What is ${data.name}'s office number?`,
                validate: officeNumber => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log('Please enter an office number.');
                        return false;
                    }
                }
                
            }
        ])
        .then(officeNumber => {
            data.officeNumber = officeNumber;
            return generateMember(data);
        })
        .then(promptAddNewMember)
};

function promptEngineer(data) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: `What is ${data.name}'s Github username?`,
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log('Please enter a github.');
                        return false;
                    }
                }
                
            }
        ])
        .then(github => {
            data.github = github;
            return (generateMember(data));
        })
        .then(promptAddNewMember)
};

function promptIntern(data) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: `What school does ${data.name} attend?`,
                validate: school => {
                    if (school) {
                        return true;
                    } else {
                        console.log('Please enter a school.');
                        return false;
                    }
                }                
            }
        ])
        .then(school => {
            data.school = school;
            return (generateMember(data));
        })
        .then(promptAddNewMember)
};

function promptAddNewMember() {
    inquirer
    .prompt([
        {
            type: 'confirm',
            name: 'another',
            message: 'Would you like to add another member?',
            default: 'false',
        }
    ])
    .then(answer => {
        if(answer.another) {
          return promtMemberinfo();
        } 
        const pageHtml = generateHtml();

        fs.writeFile('./dist/index.html', pageHtml, (err) => {
            if (err) {
                error.log(err);
                return;
            }
            console.log('File succesfully created!');
        });
    });
};
promtMemberinfo();