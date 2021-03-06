var fs = require("fs");

var stream = fs.createReadStream("./lib/chat-log.log", "UTF-8");

var data = "";

stream.once("data", () => {
    console.log("\n\n\n");
    console.log("Started Reading File");
    console.log("\n\n\n");
});

stream.on("data", (chunk) => {
    process.stdout.write(`  chunk: ${chunk.length}`);
    data += chunk;
});

stream.on("end", () => {
    console.log("\n\n\n");
    console.log(`Finished Reading File ${data.length}`);
    console.log("\n\n\n");
});

/*fs.readFile("./lib/chat-log.log", "UTF-8", (err, chatlog) => {
    console.log(`File Read ${chatlog.length}`);
});*/

//console.log("Reading File");