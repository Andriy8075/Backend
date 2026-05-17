# Orders CRUD

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
