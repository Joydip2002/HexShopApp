// checkout API
app.post("/api/payment", async (req, res) => {
    const { products, cardDetails } = req.body;

    // Insert card details into the 'card_details' table
    const cardInsertQuery = 'INSERT INTO card_details (card_number, expiration_month, expiration_year, cvc) VALUES ?';
    const cardValues = [[cardDetails.cardNumber, cardDetails.expirationMonth, cardDetails.expirationYear, cardDetails.cvc]];

    try {
        // Insert card details into the database
        db.query(cardInsertQuery, [cardValues], (cardErr, cardResult) => {
            if (cardErr) {
                console.error('Error inserting card details into the database:', cardErr);
                res.status(500).json({ error: 'Error processing payment' });
                return;
            }

            const cardId = cardResult.insertId; // Get the ID of the inserted card details

            // Create an array to hold the product names and prices
            const productData = products.map((product) => [product.title, product.price]);

            // Insert product names and prices into the 'products' table
            const productInsertQuery = 'INSERT INTO products (title, price) VALUES ?';
            db.query(productInsertQuery, [productData], (productErr, productResult) => {
                if (productErr) {
                    console.error('Error inserting product details into the database:', productErr);
                    res.status(500).json({ error: 'Error processing payment' });
                    return;
                }

                // Create a Stripe session and insert payment information
                const productId = productResult.insertId; // Get the ID of the inserted product

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

                const session = await stripe.checkout.sessions.create({
                    payment_method_types: ["card"],
                    line_items: lineItems,
                    mode: "payment",
                    success_url: "http://localhost:3000/success",
                    cancel_url: "http://localhost:3000/cancel",
                });

                // Insert payment information into the 'payments' table
                const paymentInfo = {
                    session_id: session.id,
                    product_id: productId,
                    card_id: cardId,
                };

                db.query('INSERT INTO payments SET ?', paymentInfo, (paymentErr, paymentResult) => {
                    if (paymentErr) {
                        console.error('Error inserting payment into the database:', paymentErr);
                        res.status(500).json({ error: 'Error processing payment' });
                    } else {
                        console.log('Payment info inserted into the database');
                        res.json({ id: session.id });
                    }
                });
            });
        });
    } catch (error) {
        console.error('Stripe error:', error);
        res.status(500).json({ error: 'Error processing payment' });
    }
});
