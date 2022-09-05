const mongoose = require("mongoose");

const toDoModel = mongoose.Schema({
  Id: {
    type: String,
  },
  Date: {
    type: String,
  },
  Title: {
    type: String,
  },
  Subtitle: {
    type: String,
  },
  Chips: {
    type: String,
  },
});

module.exports = mongoose.model("ToDo", toDoModel);
