const http = require("http");
const fs = require("fs");
const myhost = process.env.HOSTNAME || "localhost";
const myport = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    fs.readFile("./index.html", (err, data) => {
        if (err) {
            console.error(err);
        } else {
            response.end(data)
        }
    })
})
server.listen(myport, () => {
    console.log(`Server is running http://${myhost}:${myport}`);
})