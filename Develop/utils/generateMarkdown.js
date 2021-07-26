// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  let licenseType = License
    if(licenseType === 'MIT') {
      yourLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    else if (licenseType === 'Mozzilla Public License 2.0') {
      yourLicense = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
    } 
    else if (licenseType === 'Apache License 2.0') {
      yourLicense = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    } 
    else if (licenseType==='GNU GPL v3') {
      yourLicense = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    }
    else {
      yourLicense = ""
    }
    return yourLicense;
  };


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ""
  }
  else {
    return "* [License](#license)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if(License==="None") {
    return ""
  }
  else {
    return "* [License](#license)"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
