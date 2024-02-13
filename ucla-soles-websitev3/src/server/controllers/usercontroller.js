const User = require('../models/user')


const index = (req, res, next) => {
    User.find().then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:"an error occured"
        })
    })

}


const store = (req, res, next) => {
    let user = new User ({
        studentname: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        // Admin: req.body.Admin
    })

    user.save().then(response => {
        res.json({
            message: "User Added"
        })
    })
    .catch(error => {
        res.json({
            message: "an error occured"
        })
    })
}

module.exports = {index,store}