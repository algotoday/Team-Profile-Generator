const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email);

        this.role = 'Manager';
        this.officeNumber = officeNumber;
    };

    getRole() {
        return this.role
    };

    getSpecial() {
        return `Office Number: ${(this.officeNumber.officeNumber)}`
    };

    getIcon() {
        return `<span class="mt-1 material-symbols-outlined">
        local_cafe
        </span>`
    };
};

module.exports = Manager;