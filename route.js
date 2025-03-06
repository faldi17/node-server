const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "application/json"});
    
    if (req.url === "/") {
        res.end(JSON.stringify({ message: "Welcome to Node.js Server!" }));
    } else if (req.url === "/about") {
        res.end(JSON.stringify({ message: "This is the About Page" }));
    } else if (req.url === "/users") {
        res.end(JSON.stringify([
            { id: 1, name: "Safira" },
            { id: 2, name: "Kulani" }
        ]));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Page not found" }));
    }
});

const PORT = 5001;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
