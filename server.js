const express = require("express")
const passController = require("./controllers/passController")

const app = express()

app.post("/encrypt", passController.encryptPass)
app.post("/verify", passController.verifyHash)

app.listen(5000, (err) => {
    if (err) {
        console.log(err)
    }else{
        console.log("Serveur lancé")
    }
})