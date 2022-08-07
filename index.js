const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/page-template.js');




const userInput = () => {
  
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your application? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter an application name!');
          return false;
        }
      }
    },
    {
      type:'input',
      name: 'fileName',
      message: 'What do you want to name this file? (Required)',
      validate: fileNameInput => {
        if (fileNameInput) {
          return true;
        } else {
          console.log('You need to enter a file name!');
          return false;
        }
      }
    },
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
    name: 'description',
    message: "Provide a description of the project:"
},
{
  type: 'input',
  name: 'install',
  message: "How do you install this application?"
},
{
  type: 'input',
  name: 'usage',
  message: "How do you use this application?"
},
{
  type: 'input',
  name: 'test',
  message: "How do you test this appliction?"
},
{
  type: 'list',
  name: 'license',
  message: 'Select licenses for your application:',
  choices: ['Apache_2.0', 'IPL-1.0', 'MIT', 'ISC' ],
},
{
  type: 'input',
  name: 'contributor',
  message: "Please enter the contributor's name:"
},
{
  type: 'input',
  name: 'contact',
  message: "What is your email address?"
},

]);
};
//userInput().then(answers => console.log(answers));
//console.log(generatePage(profileDataArgs));

function writeTofile(fileName, data){
fs.appendFile(`${fileName}.md`, data, 
(err) => err ? console.error(err) : console.log('Your README.md is generated.')
)}

async function getData() {
  let answers = await userInput();
  writeTofile((answers.fileName), (generatePage(answers)))
}
getData();
