var exec = require("child_process").exec;

exec("ls", (err, stdout) => {
    if(err){
        throw err;
    }
    console.log("LS Finished");
    console.log(stdout);
});