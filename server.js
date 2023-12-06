const express = require("express")
const passController = require("./controllers/passController")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())

app.post("/encrypt", passController.encryptPass)
app.post("/verify", passController.verifyHash)

app.listen(5000, (err) => {
    if (err) {
        console.log(err)
    }else{
        console.log("Serveur lancé")
    }
})