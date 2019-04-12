var http = require("http");
var fs = require("fs");

/*var server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>HTML Response</title>
            </head>
            <body>
                <h1>Serving HTML Text</h1>
                <p>${req.url}</p>
                <p>${req.method}</p>
            </body>
        </html>
    `);
});

server.listen(3030);*/

http.createServer((req, res) => {
    console.log(`${req.method} request from ${req.url}`);

    if(req.url === "/"){
        fs.readFile("../public/index.html", "UTF-8", (err, html) => {
            res.writeHead(200, {"Content-type": "text/html"})
            res.end(html);
        });
    }else if(req.url.match(/.css$/)){
        var cssPath = path.join(__dirname, "public", req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type":"text/css"});
        fileStream.pipe(res);
    }else if(req.url.match(/.jpg$/)){
        var imgPath = path.join(__dirname, "public", req.url);
        var imgStream = fs.createReadStream(imgPath);
        res.writeHead(200, {"Content-Type": "image/jpeg"});
        imgStream.pipe(res);
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("404 File Not Found");
    }
}).listen(3030);

console.log("Server listening on port 3030");