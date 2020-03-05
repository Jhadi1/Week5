const http = require("http") //<-- all these need semicolons
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
res.write("<h1>Hello World!</h1>") // <-- needs semicolons, also you need to wrap this in <h1></h1> tags for this exercise
res.end()
})

server.listen(port, function(error) {
if (error) {
    console.log("Something went wrong", error) // <-- Same deal here
} else {
    console.log("Server is listening on port "+ port)
}
})
