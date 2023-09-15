import React, { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCartApi } from '../Context/CartApiContextB';

const baseURL = process.env.REACT_APP_BASE_URL;

function Success() {
  const { cartData } = useCartApi();
  const [cartProduct, setCartProduct] = useState({});
  const cl = cartData.length;
  const totalSum = cl > 0 ? cartData.reduce((accumulator, currentItem) => accumulator + (currentItem.price * currentItem.quantity), 0) : 0;

  useEffect(() => {
    // Prepare the cartProduct data
    if (cartData.length > 0) {
      const products = cartData.map((cart) => cart.title).join(', ');
      const totalItems = cartData.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0);

      const updatedCartProduct = {
        title: products,
        quantity: totalItems,
        price: totalSum
      };

      setCartProduct(updatedCartProduct);
    }
  }, [cartData, totalSum]);

  const insertPaymentData = async () => {
    try {
      if (Object.keys(cartProduct).length === 0) {
        console.error('No data available in cartProduct. Aborting POST request.');
        return;
      }

      const response = await axios.post(`${baseURL}/paymentData`, cartProduct);

      if (response.status === 200) {
        console.log('Payment data inserted successfully.');
      } else {
        console.error('Failed to insert payment data.');
      }
    } catch (error) {
      console.error('Error occurred while inserting payment data:', error);
    }
  };

  const deleteItemsInCart = async () => {
      try {
        // console.log("calling");
        const response = await axios.get(`${baseURL}/deleteAll`);
        if (response.status === 200) {
          console.log('Items in the cart have been deleted.');
        } else {
          console.error('Failed to delete items in the cart.');
        }
      } catch (error) {
        console.error('Error occurred while deleting items in the cart:', error);
      }
    };
    const handleReturnToHomepage = async() => {
      await deleteItemsInCart();
    };
     

  useEffect(() => {
    
    insertPaymentData();
  }, [cartProduct]);

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" style={{ marginTop: '2rem' }}>
          Payment Successful
        </Typography>
        <Typography variant="body1" align="center" style={{ marginTop: '1rem' }}>
          Thank you for your payment. Your transaction was successful.
        </Typography>
        <a href='/'>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            style={{ marginTop: '2rem' }}
             onClick={handleReturnToHomepage}
          >
            Return to Homepage
          </Button>
        </a>
      </Container>
    </div>
  );
}

export default Success;
