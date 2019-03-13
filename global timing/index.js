//-----------------------------------------------------------------------------------------------------
/*this  module allows us to work with timing functions*/
//-----------------------------------------------------------------------------------------------------

let waitTime = 3000;
let currentTime = 0;
let waitInterval = 10;
var percentWaited = 0;

function writeWaitingPercent(p){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
}

let interval = setInterval(() => {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime) * 100);
    writeWaitingPercent(percentWaited);
},waitInterval);

setTimeout(() => {
    clearInterval(interval);
    writeWaitingPercent(100);
    console.log("\n \n done");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);