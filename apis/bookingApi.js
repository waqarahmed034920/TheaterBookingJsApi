const bookingCtrl = require('../controllers/bookingController')
const express = require('express');

const router = express.Router();

router.get('/:id', bookingCtrl.getBookingById);

router.get('/user/:user', bookingCtrl.getBookingByUserId);

router.post('/', bookingCtrl.insertBooking);

router.put('/', bookingCtrl.updateBooking);

router.delete('/', bookingCtrl.deleteBooking);

module.exports = router;