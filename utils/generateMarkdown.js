// Function to return a license badge based on the license type
function renderLicenseBadge(license) {
  const licenseBadges = {
      'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      'GNU GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      'Creative Commons Zero v1.0 Universal': '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)'
  };

  // Return the corresponding license badge or an empty string if the license is not recognized
  return licenseBadges[license] || '';
}

// Function to return the license link based on the license type
function renderLicenseLink(license) {
  const licenseLinks = {
      'MIT License': '[MIT License](https://opensource.org/licenses/MIT)',
      'Apache License 2.0': '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
      'GNU GPLv3': '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)',
      'Creative Commons Zero v1.0 Universal': '[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)'
  };
  return licenseLinks[license] || '';
}

// Function to return the license section of README
function renderLicenseSection(license) {
  const licenseLinks = {
      'MIT License': '[MIT License](https://opensource.org/licenses/MIT)',
      'Apache License 2.0': '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
      'GNU GPLv3': '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)',
      'Creative Commons Zero v1.0 Universal': '[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)'
  };

  // Return the corresponding license section or an empty string if the license is not recognized
  return licenseLinks[license] ? `This project is licensed under the ${licenseLinks[license]} - see the [LICENSE](LICENSE) file for details.` : '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  const featureItems = data.toc_features.split('.').filter(feature => feature.trim() !== '').map(feature => `- ${feature.trim()}.`);

  return `
# ${data.project_title}

# <h3>Description<h3>

${data.description_motivation}
${data.description_problemsolved}
${data.description_lessons}

# <h3>Table of Contents<h3>

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

# <h3>Installation

1. Clone the repository to your local machine using the following command:
   \`\`\`bash
   git clone ${data.repository_URL}
   \`\`\`
2. Navigate to the project directory.
3. Open the index.js file in your preferred code editor.

# <h3>Usage<h3>

# <h4>Landing Page<h4>

${data.imagePath ? `![Image of Application](${data.imagePath})` : 'No images available'}

${featureItems.join('\n')}


# <h3>Credits<h3>

Created by ${data.name}
${data.github_profile}

# <h3>License<h3>

${licenseSection}

${licenseBadge}
`;
}

module.exports = generateMarkdown;
