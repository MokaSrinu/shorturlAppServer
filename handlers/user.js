const User = require('../database/users');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../constants');

async function register(req, res) {
    const { user } = req.body; 

    let existingUser = await User.findOne({
        email: user.email
    })

    if (existingUser) {
        return res.status(400).send({
            error: "User already exists"
        })
    }

    let userDoc = await User.create(user);

    userDoc = userDoc.toJSON()  

    delete userDoc.password;

    return res.send({
        data: userDoc,
    })
}


async function login(req, res) {
    let { email, password } = req.body

    let user = await User.findOne({
        email: email
    }, {
        password: 1,
        _id: 1,
        email: 1,
        name: 1,
    })

    if (user) {
        if (user.password === password) {
            let encryptedToken = jwt.sign({
                id: user._id,
                email: user.email,
                name: user.name
            }, SECRET)

            return res.send({
                data: {
                    token: encryptedToken
                }
            })
        } else {
            return res.send({
                error: "Password does not match."
            })
        }
    } else {
        return res.status(404).send({
            error: "User is not found"
        })
    }
}

async function getLoggedInUser(req, res, next) {
    const { context } = req;

    if (!context.user) {
        return res.status(400).send({
            error: "Token was not provided"
        })
    } else {
        return res.send({
            data: context.user
        })
    }
}


async function getAllUsers(req, res) {
    let users = await User.find();

    return res.send({
        data: users
    })
}

module.exports = {
    register,
    getAllUsers,
    login,
    getLoggedInUser
}