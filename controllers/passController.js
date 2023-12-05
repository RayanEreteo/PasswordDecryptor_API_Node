function encryptPass(req, res){
    res.send("Test encrypt")
}

function verifyHash(req, res){
    res.send("Test verify")
}


module.exports = {
    encryptPass,
    verifyHash
}