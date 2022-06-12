// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

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
  ${data.license}

  ## Contributing Credits
  ${data.credits}

  ## Tests
  ${data.tests}

  ## Questions
  Check out my GitHub account here: <a href="https://github.com/${data.github}">${data.github}</a>
  Still have questions? Email me at <a href="mailto:${data.email}">${data.email}</a>
`;
}

module.exports = generateMarkdown;
