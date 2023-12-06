const express = require("express")
const passController = require("./controllers/passController")
const bodyParser = require("body-parser")
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.post("/encrypt", passController.encryptPass)
app.post("/verify", passController.verifyHash)

app.listen(5000, (err) => {
    if (err) {
        console.log(err)
    }else{
        console.log("Serveur lancé")
    }
})