const express = require("express")

const app = express()



app.listen(5000, (err) => {
    if (err) {
        console.log(err)
    }else{
        console.log("Serveur lancé")
    }
})