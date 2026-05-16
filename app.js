require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const { createHandler } = require('graphql-http/lib/use/express');
const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const db =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lab5_orders';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

mongoose
  .connect(db)
  .then(() => console.log('Connected to DB'))
  .catch((error) => console.log(error));

app.all(
  '/graphql',
  createHandler({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
  })
);

app.use(orderRoutes);

app.use((req, res) => {
  res.status(404).render('404', { title: 'Сторінку не знайдено' });
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Listening port ${PORT}`);
});
