console.log("Hello there!");

let myFirstVariable = 10;
myFirstVariable;

var myFirstGloballyScopedVar = 11;

// for (let i = 0; i < 10; i = i + 1) {

//     setTimeout(function () {
//         console.log(i);
//     }, 2000);

// }


const january = 1;
const february = 2;

if (january === 3) {
    console.log("January is the 3rd month.");
} else if (january === 2) {
    console.log("January is the 2nd month");
} else {
    console.log("January is NOT the 3rd or 2nd month");
}


if (february === 2) {}




while (false) {

}

do {

} while (false);

for (let i = 0; false; i++) {

}



function myFunction(parameter1, parameter2) {

    console.log(arguments[2]);
    console.log(parameter1);

    return "hello";
}
myFunction("1", true, 400);


setTimeout(function (weNeedData) {
     console.log(weNeedData);
    }, 1000);

// Arrow Function
setTimeout((weNeedData, param2) => {
    console.log(weNeedData);
    console.log();
}, 1000);

setTimeout(weNeedData => console.log(weNeedData), 1000);


parseInt("100.100"); // takes the string argument, and converts it to a number; Becomes 100
parseFloat("100.100") // Becomes 100.1


january.toString(); // Takes number from variable or property and converts to a string.

// myArray.toString();

if ("100" !== 100) {
    console.log("is true");
} else {
    console.log("is false");
}


// Objects and Arrays

let myArray = [1, 2, 3, 4];

myArray[3];
myArray[0] = 100;

myArray[10] = () => {console.log("goodbye")};

myArray[10]();

// add to end and beginning. need a value in argument.
myArray.push();
myArray.unshift();
//remove to end and beginning.
myArray.pop();
myArray.shift();



let myObject = {
    firstNum: "1",
    "second Num": 2,
    thirdNum: 3,
    fourthNum: 4
};

myObject.firstNum;


let myAssignedFunc = function () {};


let myObjectWithFunc = {
    funcName: () => {console.log("hello there")}
};

