const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
