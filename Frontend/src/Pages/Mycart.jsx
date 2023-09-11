import React from 'react'
import { useCartContext } from '../Context/CartContext'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';
import Navbar from '../Navbar/navbar';

function Mycart() {

  const { cart } = useCartContext();
  const totalSum = cart.reduce((accumulator, currentItem) => accumulator + (currentItem.price*currentItem.quantity), 0);
  console.log("Cart Data is ", cart);
  return (
    <div>
      <Navbar/>
      <Box className='container py-2 my-3'>
        <Typography>My Cart</Typography>
      </Box>
      <TableContainer component={Paper} className='container' sx={{ position: 'relative', my:2}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Picture</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell align="">Price</TableCell>
              <TableCell align="">Quantity</TableCell>
              {/* <TableCell align="right">Quantity</TableCell> */}
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
                <TableCell align="">{row.title}</TableCell>
                <TableCell align="">{row.price}</TableCell>
                <TableCell align="">{row.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <hr />
        <Box>
          <Box sx={{ position: 'absolute', right: '115px' }}>
            <h6 style={{}}>{`Total Price : ${totalSum}`}</h6>
            <br />
            {/* <Link to='/checkout'><button type='submit' class='btn btn-primary mt-3 mb-3'>Checkout Now!</button></Link> */}
          </Box>
          <Box sx={{display:'flex',justifyContent:''}}>
            <Button variant='contained'>
              Buy Now
            </Button>
          </Box>
        </Box>
      </TableContainer>
    </div>
  )
}
export default Mycart
