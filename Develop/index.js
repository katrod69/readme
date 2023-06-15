const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "what is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "what is the description of your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "how do you install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "how do you use your project",
    },
    {
      type: "input",
      name: "credits",
      message: "who do you credit on your project",
    },
    {
      type: "input",
      name: "license",
      message: "what license are you using for your project",
    },
    {
      type: "input",
      name: "username",
      message: "Enter a Github Username:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email:",
    },
  ])
  .then((data) => {
    const markdownContent = generateMarkdown(data);
    const filename = `README.md`;

    fs.writeFile(
      filename,
      JSON.stringify(data, null, "\t") + markdownContent,
      (err) => (err ? console.log(err) : console.log("Success!"))
    );
  });

module.exports = generateMarkdown;
