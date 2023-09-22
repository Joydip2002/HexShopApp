import React, { useEffect, useState } from 'react'
import { useCartContext } from '../Context/CartContext'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, ButtonGroup, IconButton, Typography } from '@mui/material';
import Navbar from '../Navbar/navbar';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCartApi } from '../Context/CartApiContextB';
import { loadStripe } from '@stripe/stripe-js';

function Mycart() {
  const { cartData, removeItem, reduceQuantity, IncreaseQuantity } = useCartApi();

// Payment Part
  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51NpTJSSJq8hcq8qPS6OJNbi2G46ZN3y54AplJyppTpGRiZ28MJDxlU8jyjcd41nzvQtNWgFR6QGkASJYyyWkKB4D00dnqFQZXT");
    const body = {
      products: cartData
    }
    const headers = {
      "Content-Type": "application/json",
    }
    const response = await fetch('http://localhost:8000/api/payment', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id
    });
    
    if (result.error) {
      console.log(result.error);
    }
  }

  const cl = cartData.length;
  const totalSum = cl > 0 ? cartData.reduce((accumulator, currentItem) => accumulator + (currentItem.price * currentItem.quantity), 0) : 0;
  console.log("Cart Data is ", cartData);
  return (
    <div>
      <Navbar />
      <Box className='container py-2 my-3'>
        <Typography>My Cart</Typography>
      </Box>
      <TableContainer component={Paper} className='container' sx={{ position: 'relative', my: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Picture</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Remove Item</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" >
                  <img src={row.picture} alt="" width='100px' />
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>₹{row.price}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <ButtonGroup variant="outlined" aria-label="outlined button group" size="small">
                      <Button onClick={() => { if (row.quantity > 1) { reduceQuantity(row?.id) } }} ><RemoveIcon /></Button>
                      <Button>{row.quantity}</Button>
                      <Button onClick={() => IncreaseQuantity(row?.id)}><AddIcon /></Button>
                    </ButtonGroup>
                  </Box>
                </TableCell>
                <TableCell><IconButton onClick={() => removeItem(row?.id)}><DeleteIcon sx={{ color: 'red' }} /></IconButton></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <hr />
        <Box>
          <Box sx={{ position: 'absolute', right: '115px' }}>
            <h6 style={{}}>{`Total Price : ₹${totalSum}`}</h6>
            <br />
            {/* <Link to='/checkout'><button type='submit' class='btn btn-primary mt-3 mb-3'>Checkout Now!</button></Link> */}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: '' }}>
            <Button variant='contained' onClick={makePayment}>
              Buy Now
            </Button>
          </Box>
        </Box>
      </TableContainer>
    </div>
  )
}
export default Mycart
