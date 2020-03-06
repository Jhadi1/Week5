const http = require("http") //<-- all these need semicolons
const fs = require('fs');
const path = require('path');
const port = 8080
/**
 * If you're requiring a file you've written it must be prefixed with "./" (or wherever the path needs be
 * pointed) if you just pass plain text like you did here it will assume "about" is a node module, i.e. it
 * thinks "about" is global like "http" from line 4. Thats why it returns an error "cannot find about.html
 * module." Also you can only require in javascript files therefore requiring an html file will throw an 
 * error.
 */
/*const about = require("./about.html")*/

const server = http.createServer(function(req, res) {
    let filePath;
    if(req.url == '/') {
        filePath = path.join(__dirname, 'HtmlPage1.html');
    } else {
        filePath = path.join(__dirname, req.url);
    }

    fs.readFile(filePath, (error, content) => {
        if(error) {
            res.writeHead(404);
            res.end(`404 we couldn't find that...`);
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(content);
        }
    })
})

server.listen(port, function(error) {
if (error) {
    console.log("Something went wrong", error) // <-- Same deal here
} else {
    console.log("Server is listening on port "+ port)
}
})
