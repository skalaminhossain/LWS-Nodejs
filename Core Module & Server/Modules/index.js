const os = require('os')
const path = require('path')
const fs = require('fs')
const http = require('http')

//path
const myPath = 'E:\LWS Nodejs\Core Module & Server\index.js'
console.log(path.extname(myPath))
console.log(path.parse(myPath))

//os

console.log(os.homedir());
console.log(os.freemem());
console.log(os.cpus());

//fs
//write file
fs.writeFileSync('file.txt' , 'Create a file and somethig write')
//replace file content
fs.writeFileSync('file.txt' , 'How are you')
// append file conntent
fs.appendFileSync('file.txt', 'added new content')

//readfile

const text = fs.readFileSync('file.txt')
console.log(text.toString());

fs.readFile('file.txt' , (err , data) => {
    console.log(data.toString())
})
console.log("hello");

//http