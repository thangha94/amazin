const functions = require('firebase-functions');
const express = require('express');

const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51J6sZ9EeYl3ddFiNCGt5CKtM3beIbAMlXvB71bN4GvXXLA7DlxYKnoadE7zcP3JAnlHCMGnicHL3PTAUjZ4Q4Xwl00v93PhxLF'
);
// API
// App config
const app = express();

// middleware
app.use(
  cors({
    origin: true,
  })
);
app.use(express.json());

// API routes
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log('Payment Request Received BOOM!!', total);
  if (total >= 1) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: 'usd',
    });
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(201).send({
      clientSecret: false,
    });
  }
});

// Listen
exports.api = functions.https.onRequest(app);

// http://localhost:5001/amazin-b9e18/us-central1/api
