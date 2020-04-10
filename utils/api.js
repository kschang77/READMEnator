const axios = require("axios");

const api = {
  async getUser(username) {
    // make axios call to
    //https://api.github.com/users/${username}

    queryURL = `https://api.github.com/users/${username}`


    const response = await axios.get(queryURL)
    var d = response.data
    var ret = {}
    // console.log(d)
    ret.name = d.name
    ret.avatar_url = d.avatar_url
    ret.email = d.email
    // console.log(d.name)
    // console.log(d.avatar_url)
    // console.log(d.email)
    console.info('ret from api', ret)
    return ret
  }
};

module.exports = api;
