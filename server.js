const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for your data
const mySchema = new mongoose.Schema({
  name: String,
});

// Define a model for your data
const myModel = mongoose.model("MyModel", mySchema);

// Create a new data object
const myData = new myModel({ name: "myName" });

// Save the data object to the database
myData.save((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Data saved successfully!");
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
