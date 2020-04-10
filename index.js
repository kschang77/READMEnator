// we'll need fs, axios, inquirer
const fs = require("fs");
const inquirer = require("inquirer")
const api = require("./utils/api")
const generateMarkdown = require("./utils/generateMarkdown")

//fields used:
//-----------
//title
//description
//usage
//deployURL
//repoURL
//-----
//authorname
//authorphotoURL
//authorEmail

async function askQuestions() {

  const questions = [
    {
      type: 'input',
      name: 'repoURL',
      message: "URL of repo?",
      default: 'https://github.com/kschang77/READMEnator'
    },
    {
      type: 'input',
      name: 'title',
      message: 'Project title? ',
      default: 'abc'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Short description?',
      default: 'def'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How to use it?',
      default: 'ghi'
    },
    {
      type: 'input',
      name: 'deployURL',
      message: "URL of deployed? ",
      default: 'https://nowhere.url'
    }

  ];


  // the remaining fields will be parsed in next module
  const answers = await inquirer.prompt(questions)
  var x = answers.repoURL.substring(answers.repoURL.lastIndexOf('/') + 1)
  answers.reponame = x
  // console.info('Answers:', answers);
  return answers
}

function doProcessing(data) {
  // get username from repo URL
  var tempPath = data.repoURL
  var tempArr = tempPath.split("/")
  var tempUser = tempArr[3]

  // call api.js to pull relevant stuff from github

  const ans = api.getUser(tempUser)
  // console.info('Ans:', ans)
  return ans
}

function writeToFile(fileName, data) {

  fs.writeFileSync(fileName, data, (err) => {
    if (err) throw err;
  })
}

function init() {

  askQuestions().then(function (result) {
    var ret = result
    doProcessing(ret).then(function (ret2) {
      var ret3 = Object.assign(ret, ret2)
      // console.info('ret3 in Init', ret3)
      // two objects merged into
      // {
      // title: 'abc',
      // description: 'def',
      // usage: 'ghi',
      // deployURL: 'https://nowhere.url',
      // repoURL: 'https://github.com/kschang77/READMEnator',
      // name: 'Kasey K S Chang',
      // avatar_url: 'https://avatars1.githubusercontent.com/u/15042541?v=4',
      //reponame: READMEnator (from URL)
      // email: null
      // username: kschang77 (from URL)
      var procData = generateMarkdown(ret3)
      // console.info("Markdown is:", procData)
      writeToFile("README.md", procData)

    }



      // procData = generateMarkdown(data)


      // writeToFile("README.md",procData)
    )
  })
}




init();
