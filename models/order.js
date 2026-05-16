const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    employeeLastName: {
      type: String,
      required: true,
      trim: true,
    },
    orderAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    clientCompanyName: {
      type: String,
      required: true,
      trim: true,
    },
    customerLastName: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
