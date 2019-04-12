var fs = require("fs");

if (fs.existsSync("lib")) {
  console.log("Directort already created");
} else {
  fs.mkdir("lib", err => {
    if (err) {
      throw err;
    } else {
      console.log("Directory created");
    }
  });
}
