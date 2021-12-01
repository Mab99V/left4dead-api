const {Router}= require('express');
const controllers = require('../controllers');

const router= Router();

router.get('/', (req, res)=> res.send('MundoLeft4Dead'));

router.post('/infectado', controllers.createInfectado);
router.get('/infectado', controllers.getAllInfectado);
module.exports = router;
