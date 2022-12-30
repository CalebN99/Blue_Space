const express = require('express');
const router = express.Router();
const path = require('path');
let reqPath = path.join(__dirname, '../../models');

const User = require(path.join(reqPath, "/users/user_schema"));


router.get('/', (req, res) => {
    res.send("We are on users")

});

router.post('/generateUser', async (req, res) => {
    console.log(req.body)
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    console.log(user);

    await user.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err);
    })
});



module.exports = router;

