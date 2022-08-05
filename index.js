const inquirer = require('inquirer');
const fs = require ('fs');

const userInput = () => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)' ,
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your GitHub username!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email address?',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('You need to enter a project name!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'project',
        message: "What is your project's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter a project name!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'description',
        message: "Provide a description of the project"
    },
    {
        type: 'input',
        name: 'license',
        message: "What kind of license should your projoect have?"
    },
    {
        type: 'input',
        name: 'install',
        message: "How do you install this application?"
    },
    {
        type: 'input',
        name: 'test',
        message: "How do you test this appliction?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "How do you use this application?"
    },

    
]);
};
userInput().then(answers => console.log(answers));