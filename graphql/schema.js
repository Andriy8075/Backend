const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Order {
    _id: ID!
    employeeLastName: String!
    orderAmount: Float!
    productName: String!
    clientCompanyName: String!
    customerLastName: String!
    createdAt: String
    updatedAt: String
  }

  type Query {
    getOrder(_id: ID!): Order
    getAllOrders: [Order!]!
  }

  type Mutation {
    createOrder(
      employeeLastName: String!
      orderAmount: Float!
      productName: String!
      clientCompanyName: String!
      customerLastName: String!
    ): Order!

    updateOrder(
      _id: ID!
      employeeLastName: String!
      orderAmount: Float!
      productName: String!
      clientCompanyName: String!
      customerLastName: String!
    ): Order

    deleteOrder(_id: ID!): Boolean!
  }
`);

module.exports = schema;
