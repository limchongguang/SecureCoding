var secret = '89f48478ofu84hfue8o8eije4'; //your own secret key
module.exports.key = secret;


//Proposed fixed:

// const crypto = require('crypto');


// function generateNewKey() {
//   return crypto.randomBytes(32).toString('hex');
// }

// let currentKey = generateNewKey();

// let previousKey = null;

// // Rotate keys every 5 minutes (5 * 60 * 1000 ms)
// setInterval(() => {
//   previousKey = currentKey;       // move current to previous
//   currentKey = generateNewKey();  // generate a fresh key
//   console.log('🔑 JWT secret key rotated');
//   console.log('Previous Key:', previousKey);
//   console.log('Current Key:', currentKey);
//   console.log('---------------------------------');
// }, 24 * 60 * 60 * 1000);  // 24 hours in ms   5 * 60 * 1000); --> // 5 minutes in ms

// // Export functions to access keys
// module.exports = {
//   getCurrentKey: () => currentKey,
//   getPreviousKey: () => previousKey
// };


