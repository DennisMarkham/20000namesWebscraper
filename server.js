var request = require("request");
var cheerio = require("cheerio");
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
     {
      type: "input",
      message: "Which nationality",
      name: "nationality"
    },
    {
    type: "list",
      message: "Which gender?",
      choices: ["male", "female"],
      name: "gender"	
    }
  ]).then(function(inquirerResponse) {
    
    request("http://www.20000-names.com/" + inquirerResponse.gender + "_" + inquirerResponse.nationality + "_names.htm", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    // For each element with a "title" class
    $("li").each(function(i, element) {
      // Save the text and href of each link enclosed in the current element
      var name = $(element).text
      

    console.log(name);
    });
  });

  });