import React from 'react'
import { useCartContext } from '../Context/CartContext'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, IconButton, Typography } from '@mui/material';
import Navbar from '../Navbar/navbar';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

function Mycart() {

  const { cart, removeItem } = useCartContext();
  // const {} = useCartContext();
  const cl = cart.length;
  const totalSum = cl > 0 ? cart.reduce((accumulator, currentItem) => accumulator + (currentItem.price * currentItem.quantity), 0) : 0;
  console.log("Cart Data is ", cart);
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
            {cart.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" >
                  <img src={row.thumbnail} alt="" width='100px' />
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>₹{row.price}</TableCell>
                <TableCell>{row.quantity}</TableCell>
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
            <Link to='/payment-page'>
              <Button variant='contained'>
                Buy Now
              </Button>
            </Link>
            {/* <StripeCheckout
              name="Three Comma Co."  
              description="Big Data Stuff"  
              image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"  
              ComponentClass="div"
              panelLabel="Give Money"  
              amount={totalSum}  
              currency="USD"
              stripeKey="..."
              locale="zh"
              email="info@vidhub.co"
              shippingAddress
              billingAddress={false}
              zipCode={false}
              alipay 
              bitcoin  
              allowRememberMe 
              token={this.onToken} 
              opened={this.onOpened}  
              closed={this.onClosed}  
            
              reconfigureOnUpdate={false}
                
              triggerEvent="onTouchTap"
            >
              <button className="btn btn-primary">
                Use your own child component, which gets wrapped in whatever
                component you pass into as "ComponentClass" (defaults to span)
              </button>
            </StripeCheckout> */}
          </Box>
        </Box>
      </TableContainer>
    </div>
  )
}
export default Mycart
