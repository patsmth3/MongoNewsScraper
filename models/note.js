// Require mongoose
app.listen(port);
mongoose = require("mongoose");

// Create a Schema class with mongoose
let Schema = mongoose.Schema;

// make NoteSchema a Schema
let NoteSchema = new Schema({
  note: {
    type: String
  }
});

let Note = mongoose.model("Note", NoteSchema);

// Export the model so we can use it on our server file.
module.exports = Note;
