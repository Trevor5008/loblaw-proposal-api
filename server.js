const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { PORT, CORS_ORIGIN } = process.env;
const app = express();

app.listen(PORT, () => {
   console.log(`🚀 Server running at http://localhost:${PORT}`);
 });