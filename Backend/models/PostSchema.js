const { Schema, model } = require("mongoose");

const required = true;
const schema = Schema({
  schoolname: { type: String, required },
  about: { type: String, required },
  location: { type: String, required },
  admission: { type: String, required },
  imageFileSet: { type: String, required },
  publishedAt: { type: Date, default: Date.now() },
});

module.exports = model("posts", schema);
