const path = require("path");

module.exports = {
  from: "./src",
  to: path.resolve(__dirname, "build") + "/tags.js",
  ext: "tag.html"
};
