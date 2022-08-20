const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email);

        this.role = 'Engineer';
        this.github = github;
    };

    getRole() {
        return this.role;
    };

    getGithub() {
        return this.github;
    }

    getRoleInfo() {
        return `Github: <a href='https://github.com/${this.github.github}'>${this.github.github}</a>`
    };
    getIcon() {
        return "<i class = 'fas fa-glasses'></i>"
    }
};

module.exports = Engineer;