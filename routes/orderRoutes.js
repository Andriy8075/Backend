const express = require('express');
const {
  getHome,
  getOrders,
  getOrder,
  getAddOrder,
  addOrder,
  getEditOrder,
  editOrder,
  deleteOrder,
  getOrdersJson,
} = require('../controllers/orderController');

const router = express.Router();

router.get('/', getHome);
router.get('/api/orders', getOrdersJson);
router.get('/orders', getOrders);
router.get('/orders/:id', getOrder);
router.get('/add-order', getAddOrder);
router.post('/add-order', addOrder);
router.get('/edit/:id', getEditOrder);
router.put('/edit/:id', editOrder);
router.delete('/orders/:id', deleteOrder);

module.exports = router;
