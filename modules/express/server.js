var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var skierTerms = [
    {
        term: "flip",
        defined: "flip the table"
    },
    {
        term: "hard flip",
        defined: "flip the table between the legs"
    },
    {
        term: "360 flip",
        defined: "flip the table in 360°"
    }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url} - ${JSON.stringify(req.body)}`);
    next();
});

app.use(cors());

app.use(express.static("./public"));

app.get("/dictionary-api", (req, res) => {
    res.json(skierTerms);
});

app.delete("/dictionary-api/:term", (req, res) => {
    skierTerms = skierTerms.filter((element) => {
        return element.term.toLowerCase() !== req.params.term.toLowerCase();
    });
    res.json(skierTerms);
});

app.post("/dictionary-api", (req, res) => {
    skierTerms.push(req.body);
    res.json(skierTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;