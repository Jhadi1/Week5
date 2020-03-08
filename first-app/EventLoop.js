//Exercise Wait
/**
 * You didn't finish the second part of this which is the promise part I added in my take on it below
 */
/*
const message = () => {
    console.log('Timer started...');
    const promise = new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve('Timer complete...');
            }, 3000);
        } catch(error) {
            reject(error);
        }
    });
    return promise; 
}

message().then(result => {
    console.log(result);
})
*/

let message= ()=> {
    console.log("Greetings from setTimeout") // <-- semicolon
}

setTimeout(message, 5000);

const log = require("./logger");

//Exercise Input/File
/**
 * This is good though the exercise did want you to get user input from the console and then append 
 * that to the file and read the file with the appened text. 
 */
var fs = require("fs");

fs.readFile("readMe.txt", "utf8", function(err, data){
    console.log(data);
})

//--Emit Event
/**
 * This is good and youre creatting custom emitters properly however I would have like to see these 
 * events get emitted when those actions are actually taking place. 
 */
const events = require("events");
const myEmitter = new events.EventEmitter();

myEmitter.on("fileCreated", (msg)=> {
    console.log(msg);
});

/**
 * Side note you make want to consider moving to ES6 arrow functions instead of tradtional functions, 
 * they are fine to use and I encourage you to use whichever is more comfortable however the new ES6
 * syntax is now more widely used. 
 */
myEmitter.on("fileWrittenTo", (msg)=> {
    console.log(msg);
});


myEmitter.on("fileRead", (msg)=> {
    console.log(msg);
});

myEmitter.emit("fileCreated", "file has been created");
myEmitter.emit("fileWrittenTo", "file has been written to");
myEmitter.emit("fileRead", "file has been read");