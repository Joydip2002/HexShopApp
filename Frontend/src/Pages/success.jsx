import React, { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCartApi } from '../Context/CartApiContextB';

const baseURL = process.env.REACT_APP_BASE_URL;

function Success() {

  // const deleteItemsInCart = async () => {
  //   try {
  //     // console.log("calling");
  //     const response = await axios.get(`${baseURL}/deleteAll`);
  //     if (response.status === 200) {
  //       console.log('Items in the cart have been deleted.');
  //     } else {
  //       console.error('Failed to delete items in the cart.');
  //     }
  //   } catch (error) {
  //     console.error('Error occurred while deleting items in the cart:', error);
  //   }
  // };
  // const handleReturnToHomepage = async () => {
  //   await deleteItemsInCart();
  // };


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
            // onClick={handleReturnToHomepage}
          >
            Return to Homepage
          </Button>
        </a>
      </Container>
    </div>
  );
}

export default Success;
