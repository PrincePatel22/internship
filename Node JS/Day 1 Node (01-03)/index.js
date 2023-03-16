import fs from "fs";

// read file
fs.readFile("demo.txt", (err, data) => {
  // console.log(data.toString());
  return data;
});

// create new file,If the file does not exist, an empty file is created

// append content to file
fs.appendFile("demo2.txt","This is demo2", (err) => {
  if (err) throw err;
  console.log("append file done");
});

// open file for writing
fs.open('demo2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('open done');
});

// write file 
fs.writeFile("demo3.txt", "This is demo3", function (err) {
  if (err) throw err;
  console.log("write file done");
});

// delete file 
// fs.unlink('delete.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted');
// });

// rename file
fs.rename('rename3.txt', 'rename.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed');
});

