const {Router} = require('express');
const router = Router();
const multer = require('multer');

const {
    createSpeechToText
} = require('../../controllers/speech-to-text-controller');

router.get('/speech_to_text',multer().any(), createSpeechToText);

module.exports = router;