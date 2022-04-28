const { response } = require('express');

const { verifyGoogleToken } = require('../helpers/google.verify.token');

const googleAuthController = async (req, res = response) => {
    const token = req.body.token;
    if (!token) res.status(401).json({ message: 'Token is missing' });

    const googleAccount = await verifyGoogleToken(token);

    if (!googleAccount) res.status(401).json({ message: 'Google account is not valid' });

    console.info('google account: ', googleAccount);

    res.status(200).json(googleAccount);
}

module.exports = { googleAuthController };