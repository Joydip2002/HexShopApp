const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid').v4;
const Stripe = require('stripe');
const stripe = new Stripe('sk_test_51NpTJSSJq8hcq8qPVbD18hkLlH3r9Om4k6dmCJMMstEywZUh8PuQLjE4ez01hbnwtLHtyRQOCnuqV9DgjmVYk2W5004L9xt0nS' || '', null);
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const now = new Date();

const PORT = process.env.PORT || 8000;
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'laravelrestapi',
});
if (db) {
    console.log("Connected to Database");
}
else {
    console.error(`Error connecting to DB`);
}


app.post('/api/payment', async (req, res) => {
    console.log(req.body);
    let error, status;
    try {
        const { cartData, token } = req.body;
        // const customer = await stripe.customers.create({
        //     email: token.email,
        //     source: token.id,
        // });

        const { id: customerId } = await stripe.customers
            .create({
                email: token.email,
                source: token.id,
            })


        const invoiceId = `${token.email
            }-${Math.random().toString()}-${Date.now().toString()}`;


        const cl = cartData.length;
        const productNames = cartData.map((product) => product.title).join(', ');
        const totalPrice = cl > 0 ? cartData.reduce((accumulator, currentItem) => accumulator +  currentItem.price * currentItem.quantity, 0) : 0;
        const totalQuantity = cartData.reduce((total, product) => total + product.quantity, 0);
        const userid = cartData[0].user_fk_id;

        // const created_at = date.format(now, 'YYYY/MM/DD HH:mm:ss');
        // const updated_at = date.format(now, 'YYYY/MM/DD HH:mm:ss');
        // const charge = await stripe.paymentIntents.create({
        //     amount: totalPrice,
        //     currency: 'usd',
        //     // automatic_payment_methods: { enabled: true },
        //     customer: customer.id,
        //     receipt_email: token.email,
        //     payment_method_types: ["card"],
        //     description: 'Purchase of ' + productNames,
        //     shipping: {
        //         name: token.card.name,
        //         address: {
        //             line1: token.card.address_line1,
        //             city: token.card.address_city,
        //             country: token.card.address_country,
        //             postal_code: token.card.address_zip,
        //         },
        //     },
        // });

        const charge = await stripe.paymentIntents.create(
                {
                    amount: totalPrice,
                    currency: 'USD',
                    customer: customerId,
                    receipt_email: token.email,
                    description: productNames,
                },
                { idempotencyKey: invoiceId },
            )
            .catch((e) => {
                console.log(e);
            });

        console.log('charge:', { charge });
        db.query(
            'INSERT INTO payments (quantity, products, price, session_id, user_id) VALUES (?, ?, ?, ?, ?)',
            [totalQuantity, productNames, totalPrice, JSON.stringify(token),userid],
            (err, results) => {
                if (err) {
                    console.error('Error inserting data into MySQL:', err);
                    status = 'failure';
                } else {
                    console.log('Data inserted into MySQL:', results);
                    status = 'success';
                }
                res.json({ error, status });
            }
        );

    } catch (error) {
        console.error(error);
        status = 'failure';
        res.json({ error, status });
    }
});

app.listen(PORT, () => {
    console.log('App Running on Port 8000');
});
