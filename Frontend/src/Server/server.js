// // server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const stripe = require('stripe')('YOUR_SECRET_KEY');

// const app = express();
// const port = 3001;

// app.use(bodyParser.json());

// // Create a payment intent
// app.post('/create-payment-intent', async (req, res) => {
//   try {
//     const { amount } = req.body;
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'usd',
//     });
//     res.status(200).json({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
