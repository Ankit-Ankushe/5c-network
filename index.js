const express = require('express')
const fs = require('fs')
const app = express();

app.get('/user/:username', (req, res) => {
    const username = req.params.username;
    var userDetail
    console.log(username)
    fetch(`https://api.github.com/users/${username}`)
        .then(r => r.json())
        .then(r => {
            res.send({ r });
            try {
                fs.writeFileSync('user.json', JSON.stringify(r));
            } catch (e) {
                console.log("Cannot write file ", e);
            }
        })

})

const PORT = 3020;
app.listen(PORT, () => {
    console.log('server started')
})