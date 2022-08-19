const { SECRET } = require("../../constants");
const User = require("../../database/users");
const jwt = require('jsonwebtoken');

async function auth(req, res, next) {
    
    let {token} = req.headers;
    if (token) {
        try {
            const decoded_user = jwt.verify(token, SECRET);
            //console.log(decoded_user);
            const user = await User.findOne({
                email: decoded_user.email
            })
             //console.log(user);
            if (user) {
                req.context.user = user;
            } else {
                return res.status(401).send({
                    error: "You need to login to proceed."
                })
            }

        } catch(ex) {
            console.log(ex)
            return res.status(400).send({
                error: "Invalid Token provided"
            })
        }
    }

    next();
}

module.exports = auth;