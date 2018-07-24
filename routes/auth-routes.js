const express             = require("express");
const authRoutes          = express.Router();
const passport            = require("passport");
const flash               = require("connect-flash");
const ensureLogin         = require("connect-ensure-login");
const bcrypt              = require("bcrypt");
const bcryptSalt          = 10;
const User                = require("../models/user");
const Movie             = require("../models/movies");
const Comment              = require("../models/comment");





authRoutes.get("/signup", (req, res, next) => {
  res.render("signup");
});

authRoutes.post("/signup", (req, res, next) => {
  const name        = req.body.name;
  const email       = req.body.email;
  const password    = req.body.password;
  // const passwordConf =  req.body.passwordConf;
  // const credit = req.body.credit;


  if (name === "" || password === "" || email === "" || address === "" || city === "" || state === "" || zip === "") {
    res.status(400).json({ message: `Please indicate name, email a password and address details` });
    return;
  }

  User.findOne({ email }, "email", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: 'Oops, Looks like that email already has an account' });
      return
    }
   
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      name,
      password: hashPass,
      email,
    });

    newUser.save((err) => {

      if (err) {
        res.status(400).json({ message: 'Something went wrong' });
      } else {
        console.log("HEYYYYYY")

        req.login(newUser, (err) => {
          if (err) {
            res.status(500).json({ message: 'Something went wrong' });
            return;
          }
          console.log("LOGGED IN THROUGH SIGNUP")
          res.status(200).json(req.user);
        });
      }
    });
      
  });
});

//get login

authRoutes.get("/login", (req, res, next) => {
  res.redirect("/");
}); 
//end get login

//post login route
authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong' });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong' });
        return;
      }

      // We are now logged in (notice req.user)
      res.status(200).json(req.user);
    });
  })(req, res, next);
});



authRoutes.post("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Success' });
});
 

// end homepage get

//google login routes
authRoutes.get("/auth/google", passport.authenticate("google", {
  scope: ["https://www.googleapis.com/auth/plus.login",
          "https://www.googleapis.com/auth/plus.profile.emails.read"]
}));

authRoutes.get("/auth/google/callback", passport.authenticate("google", {
  failureRedirect: "/",
  successRedirect: "/profile"
}));


authRoutes.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});


authRoutes.get('/loggedin', (req, res, next) => {
  console.log("user in backend: ", req.user)
  if (req.isAuthenticated()) {
    res.json(req.user);
    return;
  }

  res.json({ message: 'Unauthorized' });
});

authRoutes.post('/commentinfo', (req, res, next) => {
if(!req.user){
  res.status(401).json({message: 'You have to be logged in in order to add a comment!'})
}

    const theNewComment = new Comment({
      id: req.body.commentid,
      name: req.body.commentname,
      title: req.body.commenttitle,
      content:req.body.commentcontent,
  
    });

    theNewComment.save( err => {
      if(err){
        res.json(err);
        return;
      }
    console.log("user before save: ", req.user);

      req.user.comments.push(theNewComment._id);
      req.user.save( err => {
        console.log("user after save: ", req.user);

        if(err){
          res.json(err);
          return;
        }
        res.json(req.user);
      })
    })
}) 


authRoutes.get('/comments', (req, res, next) => {
  var commentsArray = [];
  User.findById(req.user._id)
  .then(foundUser => {
    foundUser.comments.forEach( oneComment => {
      Comment.findById(oneComment)
      .then(foundComment => {
        commentsArray.push(foundComment);
        console.log("comments array up: ", commentsArray)
      })
    })
    setTimeout(function(){
      res.json(commentsArray)
    }, 1000)
  })
} )


module.exports = authRoutes;