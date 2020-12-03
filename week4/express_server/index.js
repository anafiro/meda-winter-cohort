
const express = require("express");


//Bring in the FS package.
const fs = require("fs");

let history = {
    submissions: []
};

// Check if the history.json file exists.
if (fs.existsSync("history.json")) {

    // If it does exists, read it and load it into history variable.
    let string = fs.readFileSync("history.json", "utf-8");
    history = JSON.parse(string);
    console.log("History file found and loaded!");

} else {

    // If it doesn't exists, convert history into JSON and save it to history.json.
    let json = JSON.stringify(history);
    fs.writeFileSync("history.json", json, "utf-8");
    console.log("History file not found! Creating a new one.");

}

// Brings in the body-parser package.
const bodyParser = require("body-parser");

const app = express();

//Connects our HTTP server with the Express web module.
const http = require("http").Server(app);

const port = 3000;

http.listen(port);

// Body Parser so we can automatically convert request objects.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

console.log("Express server is now running on " + port);

//Tells Express to load the files from the public_html folder when someone requests / or nothing.
app.use("/", express.static("public_html/") );

app.use("/portfolio", express.static("portfolio/"));



app.post("/sayHello", (request, response) => {
    console.log("Someone said hello!");


    let winningNumber = Math.floor((Math.random() * 10) + 1);
    
    // Get object sent from the front-end. This is in the form of string. 
    let dataFromFront = request.body;

    // Get number out of fron-end object and convert it to a JavaScript number.
    let userNumberChoice = parseInt(dataFromFront.number);

    
    // Create a save entry for our history object.
    let historyEntry = {
        number: userNumberChoice,
        winningNumber: winningNumber,
        timestamp: Date.now()
    };

    // Place entry in our history object.
    history.submissions.push(historyEntry);

    // Save the history object as a JSON file.
    fs.writeFileSync("history.json", JSON.stringify(history), "utf-8");

    
    let userWinner = false;
    let outOfRange = false;

    console.log(winningNumber, userNumberChoice);

    // Compare generated number and the number the user picked and see if they match.
    if (winningNumber === userNumberChoice) {
        // If they match, set the userWinner variable to true.
        userWinner = true;
    }

    // Check if the number is outside of the range of 1-10.
    if (userNumberChoice <= 0 || userNumberChoice >= 11) {
        // If it is, set the outOfRange variable to false.
        outOfRange = true;
    }

    // Build an object to send back to whoever requested this specific POST method.
    let responseObject = {
        results: userWinner,
        error: outOfRange
    };

       // Send the object to the requester.
       response.send(responseObject);
    });