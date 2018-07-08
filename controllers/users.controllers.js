const mongoose = require("mongoose");
const User = require("../models/user.model")

module.exports.create = (req, res, next) => {
    res.render("user/create", {
        user: new User()
    });
}

module.exports.doCreate = (req, res, next) => {
    const newUser = new User(req.body);

    console.log(JSON.stringify(req.body))
     
     User.findOne({ email: newUser.email })
            .then((user) => {
                if(user) {
                  return res.render('user/create', {
                        user: newUser,
                        error: {
                            email: 'Already exists'
                        }
                    })
                } else {
                    newUser.save()
                        .then((user => {
                            res.redirect('/');
                        }))
                        .catch(error =>  {
                            if (error instanceof moongose.Error.ValidationError) {
                                res.render("user/create", {
                                    user: newUser,
                                    error: error.errors
                                });
                            }
                            else {
                                next(error);
                            }
                        })
                }
            })
            .catch(error => {
                next(error);
            })
}