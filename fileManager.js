// File manager using the fs core module (Create, Read, Update, Delete)

var fs = require("fs");
var fileName = "test.txt";

// 1. Create File
console.log("Creating File...");
fs.writeFile(fileName, "Hello Node.js", function (err) {
  if (err) {
    console.log("Error creating file:", err.message);
    return;
  }
  console.log("File Created");

  // 2. Read File
  console.log("Reading File");
  fs.readFile(fileName, "utf8", function (err, data) {
    if (err) {
      console.log("Error reading file:", err.message);
      return;
    }
    console.log(data);
    
    // 3. Update File (append text)
    fs.appendFile(fileName, "\nLearning FS Module", function (err) {
      if (err) {
        console.log("Error updating file:", err.message);
        return;
      }
      console.log("File Updated");
      // Read again to show updated content
      fs.readFile(fileName, "utf8", function (err, data) {
        if (err) {
          console.log("Error reading file:", err.message);
          return;
        }
        console.log(data);
        // 4. Delete File
        fs.unlink(fileName, function (err) {
          if (err) {
            console.log("Error deleting file:", err.message);
            return;
          }
          console.log("File Deleted");
        });
      });
    });
  });
});