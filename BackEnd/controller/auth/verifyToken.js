var jwt = require('jsonwebtoken');
var config = require('../config');

function verifyToken(req, res, next) {
    console.log(req.headers);

    var token = req.headers['authorization']; //retrieve authorization header's content
    console.log(token);

    if (!token || !token.includes('Bearer')) { //process the token

        res.status(403);
        return res.send({ auth: 'false', message: 'Not authorized!' });
    } else {
        token = token.split('Bearer ')[1]; //obtain the token's value
        //console.log(token);
        jwt.verify(token, config.key, function (err, decoded) { //verify token
            if (err) {
                res.status(403);
                return res.json({ auth: false, message: 'Not authorized!' });
            } else {
                console.log(decoded)
                req.userid = decoded.userid; //decode the userid and store in req for use
                req.type = decoded.type; //decode the role and store in req for use
                next();
            }
        });
    }
}

module.exports = verifyToken;


//Proposed fixed:
// var jwt = require('jsonwebtoken');
// var config = require('../config'); // now using getCurrentKey & getPreviousKey

// function verifyToken(req, res, next) {
//     console.log(req.headers);

//     var token = req.headers['authorization']; // retrieve authorization header's content
//     console.log(token);

//     if (!token || !token.includes('Bearer')) {
//         res.status(403);
//         return res.send({ auth: false, message: 'Not authorized!' });
//     } else {
//         token = token.split('Bearer ')[1]; // obtain the token's value

//         // First, try verifying with the current key
//         jwt.verify(token, config.getCurrentKey(), function (err, decoded) {
//     if (err) {
//         const prevKey = config.getPreviousKey();
//         if (!prevKey) {
//             res.status(403);
//             return res.json({ auth: false, message: 'Not authorized!' });
//         }
//         jwt.verify(token, prevKey, function (err2, decoded2) {
//             if (err2) {
//                 res.status(403);
//                 return res.json({ auth: false, message: 'Not authorized!' });
//             } else {
//                 console.log(decoded2);
//                 req.userid = decoded2.userid;
//                 req.type = decoded2.type;
//                 next();
//             }
//         });
//     } else {
//         console.log(decoded);
//         req.userid = decoded.userid;
//         req.type = decoded.type;
//         next();
//     }
// });
//     }
// }

// module.exports = verifyToken;