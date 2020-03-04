//Exercise Prompt
const inquirer = require("inquirer")

var questions = [{
    type: "input",
    name: "name",
    message: "Wats on sale?",
}]

inquirer.prompt(questions).then(answers => {
    console.log( `${answers["name"]}Over here!`)

})




    