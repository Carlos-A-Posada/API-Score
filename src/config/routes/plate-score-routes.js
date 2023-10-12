const {Router} = require('express');
const router = Router();

const {
    createPlateScore,
    getPlateScoreByQuery,
    updatePlateScore,
    deletePlateScore
} = require('../../controllers/plat-score-controller');

router.post('/score', createPlateScore);
router.get('/score', getPlateScoreByQuery);
router.put('/score', updatePlateScore);
router.delete('/score', deletePlateScore);

module.exports = router;