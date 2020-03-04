//Exercise Wait
let message= ()=> {
    console.log("Greetings from setTimeout")
}

setTimeout(message, 5000);

const log = require("./logger");

//Exercise Input/File
var fs = require("fs");

fs.readFile("readMe.txt", "utf8", function(err, data){
    console.log(data);
})

//--Emit Event
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("fileCreated", function(){
    console.log("file has been created");
});


emitter.on("fileWrittenTo", function(){
    console.log("file has been written to");
});


emitter.on("fileRead", function(){
    console.log("file has been read");
});

emitter.emit("fileCreated");
emitter.emit("fileWrittenTo");
emitter.emit("fileRead");





