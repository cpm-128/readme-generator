// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        message: 'Provide instructions and examples for use. (Hitting enter will submit.)'
    },
    { // License
        type: 'list',
        name: 'license',
        message: 'Which license type would you like to add to your project? (If you need help choosing a license, refer to https://choosealicense.com/)',
        choices: ['mit' , 'gpl 2.0' , 'apache 2.0' , 'isc'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Enter the appropriate license to continue.');
                return false;
            }
        }
    },
    { // Contributing Credits
        type: 'input',
        name: 'credits',
        message: 'If you had any collaborators, please their GitHub names separated by a comma.'
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
        name: 'email',
        message: 'What is your email address that users may contact you through with any questions?'
    },
    { // Full name
        name: 'input',
        name: 'name',
        message: 'What is your full name?'
    }
])
};

// TODO: Create a function to write README file using fileSystem
const writeFile = data => {
    fs.writeFile('generated_README.md', data, err => {
        // if there is an error
        if (err) {
            console.log(err);
            return;
        // when the README has been created
        } else {
            console.log("Your README has been successfully generated. It is saved as generated_README.md in the root directory.")
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    // ask questions
    promptQuestions()
        // get answers
        .then(answers => {
            return generateMarkdown(answers);
        })
        // using data to display on page
        .then(data => {
            return writeFile(data);
        })
        // error handling
        .catch(err => {
            console.log(err)
        })
};

// Function call to initialize app
init();
