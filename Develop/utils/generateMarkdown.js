const fs = require('fs');

function renderLicenseBadge(license) {
  if (license){
  return `![License](https://img.shields.io/badge/license-${license}-green.svg)`;
}
return '';
}

function renderLicenseLink(license) {
  if (license){
    return `[License](https://choosealicense.com/licenses/${license})`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license){
  return `## License
  
  This project is licensed under the ${license} license. [Click here](${renderLicenseLink(license)}) to view the license.
  `;
    }
    
    
    return '';
  }



function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## Questions

'Github Profile  https://github.com/${data.username}

'Email me at ${data.email} for further questions'

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
