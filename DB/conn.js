const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Youtube").then(() => {
  console.log("mongodb connected");
});
