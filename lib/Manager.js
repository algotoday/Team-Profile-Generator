const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {

        super(name, id, email);

        this.role = 'Manager';
        this.office = office;
    };

    getRole() {
        return this.role
    };

    getRoleInfo() {
        return `Office Number: ${(this.office.office)}`
    };

    getIcon() {
        return "<i class = 'fas fa-mug-hot'></i>"
    }
};

module.exports = Manager;