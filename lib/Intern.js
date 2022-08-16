const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email);

        this.role = 'Intern';
        this.school = school;
    };

    getRole() {
        return this.role;
    };

    getSchool() {
        return this.school;
    };

    getSpecial() {
        return `School: ${this.school.school}`
    };

    getIcon() {
        return `<span class="mt-1 material-symbols-outlined">
        school
        </span>`
    };
};

module.exports = Intern;