var fs = require('fs');
var path = require('path');
//Extract the filename:
var filename = path.basename('/Users/margaritafedulova/WebstormProjects/studynode/name.txt', '.txt');
console.log(filename);


//write extracted name into another file
console.log("Going to write into existing file");
fs.writeFile('hello-name.txt', 'Hello,'+filename,  function(err) {
    if (err) {
        return console.error(err);
    }

    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    fs.readFile('hello-name.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});