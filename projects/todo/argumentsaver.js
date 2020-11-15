const fs = require("fs");

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
    "firstName": "Anahita",
    "lastName"  :"Firoozi",
    "location"  : "San Jose, CA", 

    "myInformatiom": function(){
        console.log("My full name is"+this.firstName + " " + this.lastName + "and I live in " + this.location);
    },
    belonggings: ["computer","puppy"],
    "is online": True
};
        
let jsonObjectConverted = JSON.stringify(user);


fs.writeFileSync("new.json", jsonObjectConverted, "utf-8");

user.myInformation();
user["is online"];


let parsedStringifiedJSON = fs.readFileSync("new.json", "utf-8");

parsedStringifiedJSON = JSON.parse(parsedStringifiedJSON);

console.log(user);
console.log(parsedStringifiedJSON);