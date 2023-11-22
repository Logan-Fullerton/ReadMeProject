const inquirer = require('inquirer');
const fs = require('fs');
const getLicenseBadgeUrl = require('./utils/generateMarkdown').getLicenseBadgeUrl;

const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Enter the name of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions for your project',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information about your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license for your project',
    choices:[
      { name: 'MIT License', value: 'MIT' },
      {name:'Academic Free License',value: 'AFL3.0'},
      {name:'Apache License Version 2.0',value:'Apache2.0'},
      {name:'Common Public License Version 1.0',value:'CPL1.0'},
      {name:'GNU General Public License version 3',value:'GPL3.0'},
      {name:'IBM Public License Version 1.0',value:'IPL1.0'},
      {name:'Mozilla Public License 2.0',value:'MPL2.0'},
    ]
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email',
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README file created successfully!');
    }
  });
}

function generateReadmeContent(answers) {

  const licenseBadge = getLicenseBadgeUrl(answers.license)
 
    const content=
`
# ${answers.projectName}

${licenseBadge}

## DESCRIPTION

${answers.description}

## INSTALLATION
 ${answers.installation}

## USAGE

${answers.usage}

## LICENSE

${answers.license}

## GitHub USERNAME

${answers.githubUsername}

## EMAIL

${answers.email}  

`;
return content;

}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      const fileName = 'README.md'; // Specify the name of the file
      const data = generateReadmeContent(answers); // Generate the content for the README file
      writeToFile(fileName, data); // Call the writeToFile function with the appropriate arguments
    })
    .catch((error) => {
      console.error(error);
    });
}

init();
