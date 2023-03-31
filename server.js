const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { PORT, CORS_ORIGIN } = process.env;
const app = express();
app.use(cors());
app.use(express.json());
const userRoutes = require('./routes/usersRoute.js');
const transactionsRoute = require('./routes/transactionsRoute.js');
const cartRoute = require('./routes/cartRoute.js');



app.use('/', userRoutes);
app.use('/transactions', transactionsRoute);
app.use('/cart', cartRoute);

app.listen(PORT, () => {
   console.log(`🚀 Server running at http://localhost:${PORT}`);
 });
