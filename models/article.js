// Require mongoose
let mongoose = require("mongoose");

// Create a Schema class with mongoose
let Schema = mongoose.Schema;

// Make LibrarySchema a Schema
let ArticleSchema = new Schema({
  // name: a unique string
  title: {
    type: String,
    unique: true
  },
  link: {
    type: String
  },
  note: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ]
});

// Save the  model using the LibrarySchema
let Article = mongoose.model("Article", ArticleSchema);

// Export the  model
module.exports = Article;
