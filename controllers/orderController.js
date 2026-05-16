const Order = require('../models/order');

const handleError = (res, error) => {
  console.log(error);
  res.status(500).send('Помилка сервера');
};

const getHome = (req, res) => {
  res.render('index', { title: 'Лабораторна робота №5' });
};

const getOrders = (req, res) => {
  Order.find()
    .sort({ createdAt: -1 })
    .then((orders) => {
      res.render('orders', { orders, title: 'Список замовлень' });
    })
    .catch((error) => handleError(res, error));
};

const getOrder = (req, res) => {
  Order.findById(req.params.id)
    .then((order) => {
      if (!order) {
        return res.status(404).render('404', { title: 'Замовлення не знайдено' });
      }

      return res.render('order', { order, title: 'Перегляд замовлення' });
    })
    .catch((error) => handleError(res, error));
};

const getAddOrder = (req, res) => {
  res.render('add-order', { title: 'Додати замовлення' });
};

const addOrder = (req, res) => {
  const {
    employeeLastName,
    orderAmount,
    productName,
    clientCompanyName,
    customerLastName,
  } = req.body;

  const order = new Order({
    employeeLastName,
    orderAmount,
    productName,
    clientCompanyName,
    customerLastName,
  });

  order
    .save()
    .then(() => res.redirect('/orders'))
    .catch((error) => handleError(res, error));
};

const getEditOrder = (req, res) => {
  Order.findById(req.params.id)
    .then((order) => {
      if (!order) {
        return res.status(404).render('404', { title: 'Замовлення не знайдено' });
      }

      return res.render('edit-order', { order, title: 'Редагувати замовлення' });
    })
    .catch((error) => handleError(res, error));
};

const editOrder = (req, res) => {
  const { id } = req.params;
  const {
    employeeLastName,
    orderAmount,
    productName,
    clientCompanyName,
    customerLastName,
  } = req.body;

  Order.findByIdAndUpdate(
    id,
    {
      employeeLastName,
      orderAmount,
      productName,
      clientCompanyName,
      customerLastName,
    },
    { runValidators: true }
  )
    .then(() => res.redirect(`/orders/${id}`))
    .catch((error) => handleError(res, error));
};

const deleteOrder = (req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/orders'))
    .catch((error) => handleError(res, error));
};

const getOrdersJson = (req, res) => {
  Order.find()
    .sort({ createdAt: -1 })
    .then((orders) => res.json(orders))
    .catch((error) => handleError(res, error));
};

module.exports = {
  getHome,
  getOrders,
  getOrder,
  getAddOrder,
  addOrder,
  getEditOrder,
  editOrder,
  deleteOrder,
  getOrdersJson,
};
