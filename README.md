# Lab 5-6 Orders CRUD

Node.js application. The app uses Express, EJS, MongoDB, Mongoose, and GraphQL to manage company orders.

## Requirements

- Node.js
- npm
- MongoDB locally or MongoDB Atlas

## Installation

Install dependencies:

```powershell
npm install
```

Create a `.env` file from the example:

```powershell
copy .env.example .env
```

## MongoDB Setup

For a local MongoDB server, keep this value in `.env`:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/lab5_orders
PORT=3000
```

## Run the App

Start in development mode:

```powershell
npm run dev
```

Or start normally:

```powershell
npm start
```

Open the app in your browser:

```text
http://localhost:3000
```

## Routes

- `GET /` - home page
- `GET /orders` - view all orders
- `GET /orders/:id` - view one order
- `GET /add-order` - form to add an order
- `POST /add-order` - save a new order
- `GET /edit/:id` - form to edit an order
- `PUT /edit/:id` - update an order
- `DELETE /orders/:id` - delete an order
- `GET /api/orders` - return all orders as JSON
- `POST /graphql` - GraphQL endpoint for Query and Mutation

## GraphQL in Postman

Use this URL:

```text
http://localhost:3000/graphql
```

In Postman, select `POST`, open the `Body` tab, choose `GraphQL`, and paste one of the operations below.

### Query: Get All Orders

```graphql
query {
  getAllOrders {
    _id
    employeeLastName
    orderAmount
    productName
    clientCompanyName
    customerLastName
    createdAt
    updatedAt
  }
}
```

### Query: Get One Order

Replace the `_id` value with an existing document id.

```graphql
query {
  getOrder(_id: "ORDER_ID") {
    _id
    employeeLastName
    orderAmount
    productName
    clientCompanyName
    customerLastName
  }
}
```

### Mutation: Create Order

```graphql
mutation {
  createOrder(
    employeeLastName: "Петренко"
    orderAmount: 1500
    productName: "Ноутбук"
    clientCompanyName: "ТОВ Альфа"
    customerLastName: "Іваненко"
  ) {
    _id
    employeeLastName
    orderAmount
    productName
    clientCompanyName
    customerLastName
  }
}
```

### Mutation: Update Order

Replace the `_id` value with an existing document id.

```graphql
mutation {
  updateOrder(
    _id: "ORDER_ID"
    employeeLastName: "Сидоренко"
    orderAmount: 2100
    productName: "Монітор"
    clientCompanyName: "ТОВ Бета"
    customerLastName: "Коваленко"
  ) {
    _id
    employeeLastName
    orderAmount
    productName
    clientCompanyName
    customerLastName
    updatedAt
  }
}
```

### Mutation: Delete Order

Replace the `_id` value with an existing document id.

```graphql
mutation {
  deleteOrder(_id: "ORDER_ID")
}
```
