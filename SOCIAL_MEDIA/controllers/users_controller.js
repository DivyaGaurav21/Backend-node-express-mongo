//import model of db
// const passport = require('passport');
const User = require('../models/user');


module.exports.profile = (req, res) => {
    res.render('user_profile', {
        title : 'profile | page'
    })
    }

//render the sign up page
module.exports.signUp = (req, res) => {
    // if (req.isAuthenticated()) {
    //     return res.redirect('/users/profile')    
    // }
    return res.render('user_sign_Up', {
        title: "Social | Sign Up"
    })
}
//render the sign in page
module.exports.signIn = (req, res) => {
    // if (req.isAuthenticated()) {
    //     return res.redirect('/users/profile')
    // }
    return res.render('user_sign_in', {
        title: "Social | Sign In"
    })
}


module.exports.create = async (req, res) => {
    // console.log(req.body);
    try {
        if (req.body.password !== req.body.confirm_password) {
            return res.redirect('back');
        }
        const existingUser = await User.findOne({ email: req.body.email });

        if (!existingUser) {
            const newUser = await User.create(req.body);
            // console.log('new user is created' , newUser)
            return res.redirect('/users/sign-in');
        } else {
            return res.redirect('back');
        }
    } catch (err) {
        console.log('Error in user creation:', err);
        return res.redirect('back');
    }
};

