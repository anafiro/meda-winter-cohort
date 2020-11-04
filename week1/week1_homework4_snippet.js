// This is the start of a function definition, it has the name of "myFunction", and has two parameters to hold incoming data, "option1" and "option2".
function myFunction(option, option2) {

    // creating a variable (local scope) called product that holds the multipication of our parameters to it.
    let product = option * option2;

    // It does not run inside the website untill we call it.It is stored in the memory.
    console.log(product);

    //Here is we are the parameter option to our string "The value of the option parameter is ".
    console.log("The value of the option parameter is " + option);

    // we use if conditional statements to use if parameter option is equal to zero. The "===" indicates the datatypes should match.
    if (option === 0) {
        
        //We are returning a result eventhough it does not show inside the browser. we do not output it.
        return "Everything is good!";
    // we are using esle if to test second condition and set our option parameter to equal to 1:
    } else if (option === 1) {
        
        //we are returning a condition eventhough it does not show in the browesr. we do not output it.
        return "An error happened!";
    // this is the thrid condition to test. It runs if the other two previous conditions fails.
    } else if (option === -1) {
        
        //we are returning a condition eventhough it does not show in the browesr. we do not output it.
        // It execute this one if the previous ones do not go through.
        return "Everything is bad!";
    }

}
// creating a variable to hold the return. if the condition is met, it will return the value that stated in the condition.
let result = myFunction(1, 11);
// we are creating a varaible to hold the return.if the condition is met, it will return the value that the condition is based on.

let result2 = myFunction(2, 200);

//we are using logical operator && to say if these two conditions are true for sure, then go to/execute console.log.
if ( result === "An error happened" && result2 === "An error happened") {

    //It prints out "Catastrophic failure." if it meets both conditions && in this situation.
    console.log("Catastrophic failure.");

}