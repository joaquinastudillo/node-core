//-----------------------------------------------------------------------------------------------------
/*this  modules are used to work paths on the computer*/
//-----------------------------------------------------------------------------------------------------


const path = require('path');
const util = require('util');
const v8 = require('v8');

util.log(path.basename(__filename));
console.log(path.basename(__filename));

const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

util.log(dirUploads);
console.log(dirUploads);

util.log(v8.getHeapStatistics());