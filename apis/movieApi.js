const movieCtrl=require('../controllers/moviecontroller')

const express=require('express');

const router = express.Router();

router.get('/:id', movieCtrl.getmovieById);

router.post('/', movieCtrl.insertmovie);

router.put('/', movieCtrl.updatemovie);

router.delete('/', movieCtrl.deletemovie);

module.exports = router;