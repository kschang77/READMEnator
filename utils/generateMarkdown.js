function generateMarkdown(data) {
  return `
# ${data.title}

![Current Open Source License](https://img.shields.io/github/license/${data.username}/${data.reponame}?style = plastic)

  ${ data.description}

# Table of Contents


## Installation

## Usage

  ${ data.usage}


## Deployed Link

  ${ data.deployURL}


## Project Repo

  ${ data.repoURL}


## Screenshot(s) / Demo

  To be added. 


# Built With



## Code Snippet



## Stretch Goals / Future Developement




## License

  copyright(c) ${data.name}

  See(./LICENSE) for current license.


## Contributing

N / A


## Tests

N / A

## Questions

  * ${data.name}

  * ![Author Photo](${data.avatar_url})

  * ${data.email}



## Acknowledgments

  * Hat tip to Jerome, Kerwin, Mahi, and the rest of 2020 March UCB Coding Bootcamp Cohort
    `;
}

module.exports = generateMarkdown;
