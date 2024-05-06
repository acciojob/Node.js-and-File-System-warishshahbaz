const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the filename: ", (filename) => {
  rl.question("Enter the word to remove: ", (word) => {
    // TODO: Implement this function
    removeWordFromFile(filename, word);
    rl.close();
  });
});

function removeWordFromFile(filename, wordToRemove) {
  // Read the file contents
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      return;
    }

    // Remove all occurrences of the specified word
    const modifiedContent = data.replace(
      new RegExp("\\b" + wordToRemove + "\\b", "g"),
      ""
    );

    // Write the modified content back to the file
    fs.writeFile(filename, modifiedContent, "utf8", (err) => {
      if (err) {
        console.error(`Error writing to file: ${err.message}`);
        return;
      }
      console.log(`"${wordToRemove}" removed from ${filename}`);
    });
  });
}
