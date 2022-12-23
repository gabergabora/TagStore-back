var jwt = require('jsonwebtoken')

function auth(req, res, next) {
    const { authentication } = req.headers;

    jwt.verify(authentication, process.env.SECRET, function (err, decoded) {
        if (decoded) {
            console.log(decoded);
            req.userId=decoded.data.userId
           // req.sellerId=decoded.data.sellerId

            next()
        }
        if (err) {
            res.status(401).json("error")
        }
    });


}
var verifytokenandauth=(req, res, next)=>{
    auth(req,res,()=>{
        if( req.userId===req.params.id)
        next()
        else{ res.status(401).json("error not allowed")}
    })
}

module.exports ={auth,verifytokenandauth}