const axios = require("axios");

const api = {
  getUser(username) {
    // make axios call to
    //https://api.github.com/users/${username}

    queryURL = `https://api.github.com/users/${username}`


    axios.get(queryURL)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
};

module.exports = api;
