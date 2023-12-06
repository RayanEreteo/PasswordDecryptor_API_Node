const bcrypt = require("bcrypt");

async function encryptPass(req, res) {
  const { plainPass } = req.body;

  if (!plainPass) {
    return res.json({
      success: false,
      message: "Aucune donnée.",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(plainPass, salt);

  res.json({
    success: true,
    hash: hash,
  });
}

async function verifyHash(req, res) {
  const { plainPass, hash } = req.body;

  if (!plainPass || !hash) {
    return res.json({
      success: false,
      message: "Aucune donnée.",
    });
  }

  const isMatch = await bcrypt.compare(plainPass, hash);

  if (isMatch) {
    return res.json({ success: true, message: "Le mot de passe correspond au hash donnée." });
  } else {
    return res.json({
      success: false,
      message: "Le mot de passe correspond pas au hash donnée.",
    });
  }
}

module.exports = {
  encryptPass,
  verifyHash,
};
