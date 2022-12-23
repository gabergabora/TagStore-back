var jwt = require('jsonwebtoken')

function auth1(req, res, next) {
    const { authentication } = req.headers;

    jwt.verify(authentication, process.env.SECRET, function (err, decoded) {
        if (decoded) {
            console.log(decoded);
           // req.userId=decoded.data.userId
            req.sellerId=decoded.data.sellerId

            next()
        }
        if (err) {
            res.status(401).json("error")
        }
    });


}

module.exports ={auth1}
