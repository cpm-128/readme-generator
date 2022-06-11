// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt([
    { // Title
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Enter the project name to continue.');
                return false;
            }
        }
    },
    { // Description
        type: 'input',
        name: 'description',
        message: 'Enter a brief project description. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Enter a description to contue.');
                return false;
            }
        }
    },
    { //Installation
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Hitting enter will submit.)'
    },
    { // Usage
        type: 'input',
        name: 'usage',
        massage: 'Provide instructions and examples for use. (Hitting enter will submit.)'
    },
    { // License
        type: 'checkbox',
        name: 'license',
        message: 'Which license type would you like to add to your project? (If you need help choosing a license, refer to https://choosealicense.com/)',
        choices: ['MIT' , 'GNU General Public License v3.0' , 'Apache License 2.0' , 'ISC License']
    },
    { // Contributing Credits
        type: 'input',
        name: 'credits',
        message: 'If you had any collaborats, please their GitHub names separated by a comma.'
    },
    { // Tests
        type: 'input',
        name: 'tests',
        message: 'List any tests for your application and how to run them.'
    },
    { // Questions, github
        name: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Enter your GitHub username to continue.');
                return false;
            }
        }
    },
    { // Questions, email
        name: 'input',
        name: 'github',
        message: 'What is your email address that users may contact you through with any questions?'
    }
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
