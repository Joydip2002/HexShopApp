
const express = require("express");
const date = require('date-and-time');
const app = express();
const cors = require("cors");
const { json } = require("body-parser");
const stripe = require("stripe")("sk_test_51NpTJSSJq8hcq8qPVbD18hkLlH3r9Om4k6dmCJMMstEywZUh8PuQLjE4ez01hbnwtLHtyRQOCnuqV9DgjmVYk2W5004L9xt0nS");
app.use(express.json());
app.use(cors());
const mysql = require('mysql2');
const now = new Date();


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'laravelrestapi'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

// checkout API
app.post("/api/payment", async (req, res) => {
    const { products } = req.body;
    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product.title,
            },
            unit_amount: product.price * 100,
        },
        quantity: product.quantity,
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            allow_promotion_codes: true,
            success_url: `http://localhost:3000/success?payment_status=success`,
            cancel_url: "http://localhost:3000/cancel",
        });
        const cl = products.length;
        const productNames =  products.map((product) => product.title).join(', ');
        // const totalPrice = products.reduce((total, product) => total + product.price, 0);
        const totalPrice = cl > 0 ? products.reduce((accumulator, currentItem) => accumulator + (currentItem.price * currentItem.quantity), 0) : 0;
        const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);
        const userid = products[0].user_fk_id;
        const paymentInfo = {
            session_id: session.id,
            products: productNames,
            price: totalPrice,
            quantity: totalQuantity,   
            user_id: userid,
            created_at: date.format(now, 'YYYY/MM/DD HH:mm:ss'),
            updated_at: date.format(now, 'YYYY/MM/DD HH:mm:ss')
        };

       db.query('INSERT INTO payments SET ?', paymentInfo, (err, result) => {
            if (err) {
                console.error('Error inserting payment into the database:', err);
                res.status(500).json({ error: 'Error processing payment' });
            } else {
                console.log('Payment info inserted into the database');
                res.json({ id: session.id });
            }
        });
    } catch (error) {
        console.error('Stripe error:', error);
        res.status(500).json({ error: 'Error processing payment' });
    }
});

app.get("/success", (req, res) => {
    const { payment_status, session_id } = req.query;
    console.log("Received payment_status:", payment_status);
    console.log("Received session_id:", session_id);
    if (payment_status === "success" && session_id) {
        db.query(
            'UPDATE payments SET status = ? WHERE session_id = ?',
            [1, session_id],
            (err, result) => {
                if (err) {
                    console.error('Error updating payment status:', err);
                    res.status(500).json({ error: 'Error updating payment status' });
                } else {
                    console.log('Payment status updated successfully');
                    res.send('Payment successful');
                }
            }
        );
    } else {
        res.status(400).json({ error: 'Invalid payment status or session_id' });
    }
});

app.listen(8000, () => {
    console.log('Server started on port 8000');
});
