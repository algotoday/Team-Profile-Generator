const originateProfile = require("./utils/originateProfile");
const originateHtml = require("./utils/HTMLwebpage");
const inquirer = require("inquirer");
const fs = require("fs");
let obj = ``

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's the name of this team member?",
        validate: (name) => {
          if (!name) {
            console.log("Enter a name.");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What's the ID of this team member?",
        validate: (id) => {
          if (!id) {
            console.log("Enter an id.");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What's the email of this team member?",
        validate: (email) => {
          if (!email) {
            console.log("Enter an email.");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "list",
        name: "employee",
        message: "What role does this employee play?",
        choices: ["Engineer", "Manager", "Intern"],
      },
    ])
    .then((data) => {
      switch (data.employee) {
        case "Intern":
          addIntern(data);
          break;
        case "Manager":
          addManager(data);
          break;
        case "Engineer":
          addEngineer(data);
          break;
      }
    });
};

function addIntern(data) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: `What school does ${data.name} attend?`,
        validate: (school) => {
          if (!school) {
            console.log("Enter a school.");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((school) => {
      data.school = school;
      containers = originateProfile(data)
    })
    .then(addNewMember);
};

function addManager(data) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "office",
        message: `What is ${data.name}'s office number?`,
        validate: (office) => {
          if (!office) {
            console.log("Enter an office number.");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((office) => {
      data.office = office;
      containers = originateProfile(data)
    })
    .then(addNewMember);
};

function addEngineer(data) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: `What is ${data.name}'s Github username?`,
        validate: (github) => {
          if (!github) {
            console.log("Enter your github.");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((github) => {
      data.github = github;
      containers = originateProfile(data)
    })
    .then(addNewMember)
}

function addNewMember () {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "new",
        message: "Would you like to add another employee?",
        default: "false",
      },
    ])
    .then((response) => {
      if (response.new) {
        return addEmployee();
      }
      const indexHtml = originateHtml(containers);

      fs.writeFile("./dist/index.html", indexHtml, (err) => {
        if (err) {
          error.log(err);
          return;
        }
        console.log("File succesfully created!");
      });
    });
};

addEmployee();
