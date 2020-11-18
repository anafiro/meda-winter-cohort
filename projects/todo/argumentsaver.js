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

    myInformatiom: function(){
        console.log("My full name is"+this.firstName + " " + this.lastName);
    },
    location: "San Jose, CA", 

};
        
let jsonObjectConverted = JSON.stringify(user);


fs.writeFileSync("new.json", jsonObjectConverted, "utf-8");

user.myInformation();
user.location;


let parsedStringifiedJSON = fs.readFileSync("new.json", "utf-8");

parsedStringifiedJSON = JSON.parse(parsedStringifiedJSON);

console.log(user);
console.log(parsedStringifiedJSON);


let fileName;

const fileExists = fs.existsSync(fileName);

if (fileExists === false) {
    console.log("No file");
    return;
}

let fileContents = fs.readFileSync(fileName, "utf-8");

let secondItem = argument[1];

if (fileName !== arguments[2]){
    secondItem= secondItem + arguments[2];

    console.log("Here is the third item/entry")
    return
}

fs.writeFileSync("new.json", fileName, "utf-8");