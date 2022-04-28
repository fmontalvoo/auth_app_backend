const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID_IOS = process.env.CLIENT_ID_IOS;
const CLIENT_ID_WEB = process.env.CLIENT_ID_WEB;
const CLIENT_ID_ANDROID = process.env.CLIENT_ID_ANDROID;

const client = new OAuth2Client(CLIENT_ID_WEB);

async function verifyGoogleToken(token) {

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
            audience: [
                CLIENT_ID_IOS, CLIENT_ID_WEB, CLIENT_ID_ANDROID,
            ],
        });

        const payload = ticket.getPayload();
        const { email, name, picture } = payload;

        return {
            email,
            name,
            picture,
        };

        // const userid = payload['sub'];
        // If request specified a G Suite domain:
        // const domain = payload['hd'];
    } catch (error) {
        return null;
    }
}

module.exports = { verifyGoogleToken };