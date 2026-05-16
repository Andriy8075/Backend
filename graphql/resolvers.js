const Order = require('../models/order');

const formatOrder = (order) => {
  if (!order) {
    return null;
  }

  const orderObject = order.toObject ? order.toObject() : order;

  return {
    ...orderObject,
    _id: orderObject._id.toString(),
    createdAt: orderObject.createdAt
      ? orderObject.createdAt.toISOString()
      : null,
    updatedAt: orderObject.updatedAt
      ? orderObject.updatedAt.toISOString()
      : null,
  };
};

const resolvers = {
  getAllOrders: async () => {
    const orders = await Order.find().sort({ createdAt: -1 });

    return orders.map(formatOrder);
  },

  getOrder: async ({ _id }) => {
    const order = await Order.findById(_id);

    if (!order) {
      throw new Error('Order does not exist');
    }

    return formatOrder(order);
  },

  createOrder: async ({
    employeeLastName,
    orderAmount,
    productName,
    clientCompanyName,
    customerLastName,
  }) => {
    const order = await Order.create({
      employeeLastName,
      orderAmount,
      productName,
      clientCompanyName,
      customerLastName,
    });

    return formatOrder(order);
  },

  updateOrder: async ({
    _id,
    employeeLastName,
    orderAmount,
    productName,
    clientCompanyName,
    customerLastName,
  }) => {
    const order = await Order.findByIdAndUpdate(
      _id,
      {
        employeeLastName,
        orderAmount,
        productName,
        clientCompanyName,
        customerLastName,
      },
      { new: true, runValidators: true }
    );

    if (!order) {
      throw new Error('Order does not exist');
    }

    return formatOrder(order);
  },

  deleteOrder: async ({ _id }) => {
    const order = await Order.findByIdAndDelete(_id);

    return Boolean(order);
  },
};

module.exports = resolvers;
