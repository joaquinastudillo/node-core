var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
    name: '',
    saying: []
};

rl.question("What is the name of a real person? ", (answer) => {
    realPerson.name = answer;
    rl.setPrompt(`What would ${realPerson.name} say`);
    rl.prompt();
    rl.on('line', (saying) => {
        realPerson.saying.push(saying.trim());
        if(saying.toLowerCase().trim === 'exit'){
            rl.close();
        }else{
            rl.setPrompt(`What else would ${realPerson.name} say? (exit to leave)`)
            rl.prompt();
        }
    });
});

rl.on('close', () => {
    console.log("%s is a real person that says %j", realPerson.name, realPerson);
    process.exit();
});