const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const models = require('./models');

const setupAuth = (app) => {
    app.use(cookieParser());
    
    app.use(session({
        secret: 'secretserverword',
        resave: true,
        saveUninitialized: true,
    }));

    passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
        callbackURL: `${process.env.APP_URL}/github/auth`,
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        models.User.findOrCreate({
            where: {
                github_id: profile.id
            },
            defaults: {
                github_id: profile.id,
                username: profile.username
            }
        })
        .then(result => {
            return done(null, result[0]);
        })
        .catch(done);
    }))

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done) {
        models.User.findOne({
            where: {
                email: email
            }
        })
        .then(function (user) { // Sequelize return a promise with user in callback
            if (user == null) { // Checking if user exsists
                return done(null, false)  // Standerd Passport callback
            }

            if (password == user.password) { // use your password hash comparing logic here for security
                return done(null, user) // Standerd Passport callback
            }
            return done(null, false) // Standerd Passport callback
        })
        .catch(done);
    }
    ));

    passport.serializeUser((user, done) => {
        done(null, {
            id: user.id,
            firstname: 'test',
            lastname: 'example',
        })
    });


    passport.deserializeUser((id, done) => {
        done(null, id);
    })

    app.use(passport.initialize());

    app.use(passport.session());

    app.get('/login', (req, res, next) => {
        res.render('login',{
            error: req.query.error
        });
    })
    app.get('/login/github', passport.authenticate('github'));
    app.get('/logout', function(req, res, next) {
        req.logout();
        res.redirect('/');
    })

    app.get('/github/auth',
        passport.authenticate('github', {
            failureRedirect: '/login'
        }),
        (req, res) => {
            res.redirect('/app');
        })

    app.post('/login', passport.authenticate('local', 
        {
            failureRedirect: '/login?error=invalid password'  
        }),
        function(req, res) {
            res.redirect('/app');
        }
    );

};

const ensureAuthenticated  = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = setupAuth;
module.exports.ensureAuthenticated = ensureAuthenticated;