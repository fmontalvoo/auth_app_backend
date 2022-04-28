const { response } = require('express');

const googleAuthController = (req, res = response) => {
    const token = req.body.token;
    res.json({ ok: true, token });
}

module.exports = { googleAuthController };