const fs = require("fs");

let arguments = process.argv;


const fileExists = fs.existsSync("information.json");

let contents;

if (fileExists) {
    contents = fs.readFileSync("information.json", "utf-8");
} else {
    console.log("File doesn't exist");
    return;
}

let contentsObject= JSON.parse(contents);
console.log(typeof contents);
console.log(typeof contentsObject);

const user = {
    firstName: "Anahita",
    lastName :"Firoozi",
    location: "San Jose, CA", 

    myInformatiom: function(){
        console.log("My full name is"+this.firstName + " " + this.lastName + "and I live in " + this.location);
    },
    belonggings: ["computer","puppy"],
    online: True
};
        
let jsonObjectConverted = JSON.stringify(user);


fs.writeFileSync("new.json", jsonObjectConverted, "utf-8");

user.myInformation();
user["is online"];


let parsedStringifiedJSON = fs.readFileSync("new.json", "utf-8");

parsedStringifiedJSON = JSON.parse(parsedStringifiedJSON);

console.log(user);
console.log(parsedStringifiedJSON);



let history;

if (fs.existsSync("history.txt")) {
    
    history = fs.readFileSync("history.txt", "utf-8");
} else {
    
    fs.writeFileSync("history.txt", "", "utf-8");
    history = "";
}

// console.log(arguments);

let fileName = arguments[2];

// console.log(fileName);

const fileExists = fs.existsSync(fileName);

if (fileExists === false) {
    console.log("The file does not exsit");
    return;
}

// This method allows us to read a file.
let fileContents = fs.readFileSync(fileName, "utf-8");

// console.log(fileContents);


let firstItem = `The first is ${fileName} `;

console.log(firstItem);

history = `${history}${fileName}`;

history += firstItem;

let secondItem = `The second is ${fileName} `;


history = history + "\n" + secondItem;


let thirdItem =  `The third is ${fileName} `;;

if(){

}

fs.writeFileSync("history.txt", history, "utf-8");