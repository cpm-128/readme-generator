// TODO: Create a function to generate markdown for README
  // TODO: Create a function that returns a license badge based on which license is passed in
  // TODO: Create a function that returns the license link
  // TODO: Create a function that returns the license section of README
function generateMarkdown(data) {
  return `
  # ${data.title}
  <a href="#license"><img src="https://img.shields.io/badge/license-${data.license}-informational"></img></a>

  ## Description
  ${data.description}

  ## Tables of Contents
  - <a href="#installation">Installation</a>
  - <a href="#usage">Usage</a>
  - <a href="#license">License</a>
  - <a href="#contributing-credits">Contributing Credits</a>
  - <a href="#tests">Tests</a>
  - <a href="#questions">Questions</a>

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license} License
  Copyright (c) [2022] [${data.name}]
  For full license permissions, <a href="https://choosealicense.com/licenses/${data.license}">click here</a>.

  ## Contributing Credits
  ${data.credits}

  ## Tests
  ${data.tests}

  ## Questions
  Check out my GitHub account here: <a href="https://github.com/${data.github}">${data.github}</a><br>
  Still have questions? Email me at <a href="mailto:${data.email}">${data.email}</a>
`;
}

module.exports = generateMarkdown;
