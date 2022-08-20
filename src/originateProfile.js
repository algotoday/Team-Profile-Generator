const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');


function originateProfile(profile) {
    switch(profile.employee) {
        case 'Manager':
           var employee = new Manager(profile.name, profile.id, profile.email, profile.officeNumber);
            createContainers(employee);
            break;
        case 'Intern':
            var employee = new Intern(profile.name, profile.id, profile.email, profile.school);
            createContainers(employee);
            break;
        case 'Engineer':
            var employee = new Engineer(profile.name, profile.id, profile.email, profile.github);
            createContainers(employee);
            break;
    }
};

let containers = ``

function createContainers(employee) {
        return containers = `${containers}
            <div class="col-3">
                <div class="card mx-5 mb-3">
                    <div class="card-header bg-info text-center text-light h4">
                        ${employee.name} 
                        <br />
                        ${employee.getIcon()} ${employee.getRole()}
                    </div>
                    <div class='card-body px-3'>
                        <p class='card-text'>ID: ${employee.id}</p>
                        <p class='card-text'>Email: <a href='mailto:${employee.email}'>${employee.email}</a></p>
                        <p class='card-text'>${employee.getSpecial()}</p>
                    </div>
                </div>
            </div>
        `
};

module.exports = { originateProfile, createContainers }; 