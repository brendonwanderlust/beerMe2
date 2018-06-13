const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');

const setupAuth = (app) => {
    app.use(cookieParser());
    
    app.use(session({
        secret: 'secretserverword',
        resave: true,
        saveUninitialized: true,
    }));

    passport.use(new GitHubStrategy({
        clientID: "d89759d5fd4dbae5e8ed",
        clientSecret: "93a08af44ee17274d6b4b1dd97e1686dbc5db6fd",
        callbackURL: "http://localhost:3000/github/auth"
    }, (accessToken, refreshToken, profile, done) => {

    }))

    passport.serializeUser((user, done) => {
        done(null, user.id)
    });

    passport.deserializeUser((id, done) => {
        done(null, id);
    })

    app.use(passport.initialize());

    app.use(passport.session());

    app.get('/login', passport.authenticate('github'));
    app.get('/logout', function(req, res, next) {
        req.logout();
        res.redirect('/');
    })

    app.get('/github/auth',
        passport.authenticate('github', {
            failureRedirect: '/login'
        }),
        (req, res) => {
            res.redirect('/');
        }
    )
}


const ensureAuthenticated  = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('login');
}

module.exports = {
    setupAuth,
    ensureAuthenticated,
};