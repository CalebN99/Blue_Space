const express = require('express');
const router = express.Router();
const path = require('path');
let reqPath = path.join(__dirname, '../../models');

const User = require(path.join(reqPath, "/users/user_schema"));


router.get('/', (req, res) => {
    res.send("We are on users")

});

router.post('/generateUser', async (req, res) => {

    User.findOne({username: req.body.username}, (err, data) => {
        if (data == null) {
            console.log("Creating User")
            const user = new User({
                username: req.body.username,
                password: req.body.password
            });
    
             user.save()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err);
            })
        } else {
            res.send("User already exists")
        }
    })
  
  
});



module.exports = router;

