
const express = require("express");

const app = express();
const cors = require("cors");
const { json } = require("body-parser");
const stripe = require("stripe")("sk_test_51NpTJSSJq8hcq8qPVbD18hkLlH3r9Om4k6dmCJMMstEywZUh8PuQLjE4ez01hbnwtLHtyRQOCnuqV9DgjmVYk2W5004L9xt0nS");
app.use(express.json());
app.use(cors());

// checkout api
app.post("/api/payment",async(req,res)=>{
    const {products} = req.body;
    // console.log(products);

    const lineItems = products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.title,
                // images:product.picture
            },
            unit_amount:product.price * 100,
        },
        quantity:product.quantity
    }));

   
    const  session = await stripe.checkout.sessions.create({
        payment_method_types : ["card"],
        line_items: lineItems,
        mode : "payment",
        success_url : "http://localhost:3000/success",
        cancel_url : "http://localhost:3000/cancel",
    });
    res.json({id : session.id});

})

app.listen(8000,()=>{
    console.log('server start');
})