const mongoose = require("mongoose");

const db = "mongodb+srv://mongoosePracticeUser:mongoosePracticeUser@cluster0.rynoa.mongodb.net/genericDatabase?retryWrites=true&w=majority";

const options = {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true};

let connection = mongoose.connect(db, options, (error) => {
    if (error) {
        console.log("There was an error!", error);
    } else {
        console.log("Successfully connected to MongoDB Database genericDatabase.");
    }
});

let exampleSchema = new mongoose.Schema({
    username: String,
    password: String,
    created: String,
    age: Number,
    accountClosed: Boolean
});

let exampleModel = new mongoose.model("firstcollections", exampleSchema);

exampleModel.findByIdAndDelete("5fca765ac9714d5624f5c96d", (error, results) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Successfully deleted the following document from the database: ", results);
    }
});