const generatePage = (data) => {

 
  return `
  # Preoject Name: ${data.name}


  # Badges: 
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)


  # GitHub username: ${data.username}
    
  # Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Contributing](#contributing)
  * [License](#license)
  * [Contact](#contact)

  # Description:
  ${data.description}
    
  # Installation
  ${data.install}
    
  # Usage
  ${data.usage}
    
  # Test:
  ${data.test}
    
  # Contributing:
  ${data.contributor}
    
  # License:
  * ${data.license}
  * To find out more about ${data.license} go to:
  * https://opensource.org/licenses/${data.license}
    
  # Contact:
  ${data.contact}`
  };
  module.exports = generatePage;