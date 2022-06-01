const http = require("http");


const hostname = "127.0.0.1"; // localhost
const port = 3000;
let savedsounds = [];

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Access-Control-Allow-Origin', '*'); // bei CORS Fehler
    const url = new URL(request.url || "", `http://${request.headers.host}`);
    switch (url.pathname) {
    case "/getSounds":
        response.write(JSON.stringify(savedsounds));
        break;
    case "/setSounds":
        if (request.method === "POST") {
            let jsonString = "";
            request.on("data", (data) => {
                jsonString += data;
            });
            request.on("end", () => {
                savedsounds.push(JSON.parse(jsonString));
                //savedsounds = JSON.parse(jsonString);
                console.log(savedsounds);
            });
        }
    default:
        response.statusCode = 404;
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

