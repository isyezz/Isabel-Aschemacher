const http = require("http");


const hostname = "127.0.0.1"; // localhost
const port = 3000;


const server = http.createServer((request, response) => {
    if (request.method === "POST") {
        let jsonString = "";
        request.on("data", (data) => {
            jsonString += data;
        });
        request.on("end", () => {
            console.log(JSON.parse(jsonString));
        });
    }
});

// Sounds auf Server abspeichern
let savedsounds = [{},];

const url = new URL(request.url || "", `http://${request.headers.host}`);
switch (url.pathname) {
case "/getSounds":
    response.write(JSON.stringify(savedsounds));
    break;
case "/setSounds":
    if(request.method === "POST") {
        let jsonString = "";
        request.on("data", (data) => {
            jsonString += data;
        });
        request.on("end", () => {
            savedsounds = JSON.parse(jsonString);
        });
    }
default:
    response.statusCode = 404;
}
response.end();


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

