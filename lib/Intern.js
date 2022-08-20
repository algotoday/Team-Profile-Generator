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

    getRoleInfo() {
        return `School: ${this.school.school}`
    };

    getIcon() {
        return "<i class = 'fas fa-user-graduate'></i>"
    }
};

module.exports = Intern;