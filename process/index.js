//-----------------------------------------------------------------------------------------------------
/*this  module is used to work with the process on the computer*/
//-----------------------------------------------------------------------------------------------------


//trying to get flags from the terminal

function grab(flag){
    let index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index + 1];
}

let greeting = grab('--greeting');
let user = grab('--user');

if(!user || !greeting){
    console.log("You Blew it!");
}else{
    console.log(`Welcome ${user}, ${greeting}`);
}

