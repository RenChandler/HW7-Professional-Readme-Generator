// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require('fs')
const path = require ('path')
// TODO: Create an array of questions for user input
const questions = [
    // Title Question
    {
        type:"input",
        message: "What is the title of your project?",
        name: "title"
    },
    // Description
    {
        type:"input",
        message: "Please describe your project?",
        name: "description"
    },
    // Table of Contents
    // Installation
    {
        type:"input",
        message: "Are there any instructions for Installation?",
        name: "installation"
    },
    // Usage
    {
        type:"input",
        message: "How do you use this project",
        name: "usage"
    },
    // License
    {
        type:"list",
        message: "Which licenses do you want to use?",
        name: "license",
        choices: ["MIT","GPLv2","Apache","GPLv3","None"]
    },
    // Contributing
    {
        type:"input",
        message: "How do you make contributions?",
        name: "contributions"
    },
    // Test 
    {
        type:"input",
        message: "How do you run tests?",
        name: "tests"
    },
    // Questions 
    {
        type:"input",
        message: "What is your Github username",
        name: "github",
    },
    {
        type:"input",
        message: "What is your email",
        name: "email",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers=>{
        writeToFile("./dist/README.md",generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
