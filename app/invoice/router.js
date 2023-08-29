const router = require('express').Router();
const invoiceControler = require('./controller');

router.get('/invoices/:order_id', invoiceControler.show);

module.exports = router;