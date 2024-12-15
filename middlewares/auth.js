const jwt = require('jsonwebtoken');

const authVerify = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const secretKey = process.env.SECRET_KEY;

        if (!token) {
            return res.json({
                data: null,
                message: 'Please Login First'
            })
        }

        const decodedData = jwt.verify(token, secretKey);

        console.log(decodedData);

        if(!decodedData){
            return res.json({
                data:null,
                message:'Invalid token'
            })
        }

        next();
    }
    catch (err) {
        res.json({
            data: null,
            message: 'Failed to verify token'
        })
    }
}

module.exports = authVerify;