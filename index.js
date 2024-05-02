// TODO: Include packages needed for this application

const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your first and last name?',
    },
    {
        type: 'input',
        name: 'github_profile',
        message: 'What is the URL of your Github Profile?',
        validate: function (input) {
            // Regular expression to validate URL format
            const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

            if (urlRegex.test(input)) {
                return true;
            } else {
                return 'Please enter a valid URL.';
            }
        },
    },
    {
        type: 'input',
        name: 'repository_URL',
        message: 'What is the URL of your Github Repo?',
        validate: function (input) {
            // Regular expression to validate URL format
            const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

            if (urlRegex.test(input)) {
                return true;
            } else {
                return 'Please enter a valid URL.';
            }
        },
    },
    {
        type: 'input',
        name: 'project_title',
        message: 'What is the name of your project/application or website?',
    },
    {
        type: 'input',
        name: 'description_motivation',
        message: 'What was your motivation for building this application?',
    },
    {
        type: 'input',
        name: 'description_problemsolved',
        message: 'What problem does your application solve for?',
    },
    {
        type: 'input',
        name: 'description_lessons',
        message: 'What have you learned in the buidling of this application',
    },
    {
        type: 'input',
        name: 'toc_features',
        message: 'Please list any features of your application',
    },
    {
        type: 'confirm',
        name: 'toc_addimages',
        message: 'Do you have any images of your application in action that you would like to add?'
    },
    {
        type: 'input',
        name: 'imagePath',
        message: 'Please enter the file path for your images:',
        when: (answers) => answers.toc_addimages // Only ask this if the previous answer is true
    },
    {
        type: 'list',
    name: 'license',
    message: 'Please choose from one of the following licenses:',
    choices: [
        'MIT License',
        'Apache License 2.0',
        'GNU GPLv3',
        'Creative Commons Zero v1.0 Universal'
    ]},
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('Successfully wrote to', fileName);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
    }).catch((error) => {
        if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current environment");
        } else {
            console.error('Error:', error);
        }
    });
}


// Function call to initialize app
init();



