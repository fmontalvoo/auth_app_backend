const { Router } = require('express');

const { googleAuthController } = require('../controllers/auth.controller');

const router = Router();

router.post('/google_signin', googleAuthController);

module.exports = router;