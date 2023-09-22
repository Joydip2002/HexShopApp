import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, CircularProgress } from "@mui/material";
import Navbar from "../Navbar/navbar";
import styled from "@emotion/styled";

const baseURL = process.env.REACT_APP_BASE_URL;

const Border = styled('div')(({ theme }) => ({
    'border': '2px solid gray',
    'borderStyle': 'dotted',
    'marginTop': '3rem'
}));

function MyAccount() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        address: ""
    });
    const [paymentData, setPaymentData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUserData = async () => {
        try {
            const uid = sessionStorage.getItem("id");
            const response = await axios.post(`${baseURL}/myAccount`, { id: uid });
            setUserData(response.data.user);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const fetchPaymentsData = async () => {
        try {
            const uid = sessionStorage.getItem("id");
            const response = await axios.post(`${baseURL}/paymentData`, { id: uid });
            setPaymentData(response.data.AllPaymentData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching payment data:", error);
        }
    };

    useEffect(() => {
        fetchUserData();
        fetchPaymentsData();
    }, []);

    return (
        <>
            <Navbar />
            <Container>
                <Typography variant="h4" gutterBottom>
                    My Account Information
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} style={{ padding: "20px" }}>
                            <Typography variant="h6" gutterBottom sx={{ backgroundColor: 'whitesmoke', color: 'black', padding: '1rem', borderRadius: '20px' }}>
                                User Details
                            </Typography>
                            {loading ? 
                            (<CircularProgress />) : (<Box sx={{ backgroundColor: 'whitesmoke', color: 'black', padding: '1rem', borderRadius: '20px' }}>
                                <Typography variant="body1">
                                    Name: {userData.name}
                                </Typography>
                                <Typography variant="body1">
                                    Email: {userData.email}
                                </Typography>
                                <Typography variant="body1">
                                    Address: {userData.address}
                                </Typography>
                            </Box>)}
                        </Paper>
                    </Grid>

                </Grid>
                <Border></Border>
                <Box>
                    <Typography variant="h6">Payment Information</Typography>
                    {loading ? (
                        <CircularProgress />
                    ) : (
                        <TableContainer component={Paper} className='container' sx={{ position: 'relative', my: 2 }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>

                                        <TableCell>Sl No</TableCell>
                                        <TableCell>Products</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Payment Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {paymentData.map((row, index) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell>₹{row.products}</TableCell>
                                            <TableCell>₹{row.price}</TableCell>
                                            <TableCell>{row.quantity}</TableCell>
                                            <TableCell>{row.status == 1 ? 'Paid' : 'Failed'}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <hr />
                            <Box>
                                <Box sx={{ position: 'absolute', right: '115px' }}>
                                    <h6></h6>
                                    <br />
                                    {/* <Link to='/checkout'><button type='submit' class='btn btn-primary mt-3 mb-3'>Checkout Now!</button></Link> */}
                                </Box>
                            </Box>
                        </TableContainer>
                    )}
                </Box>
            </Container>
        </>
    );
}

export default MyAccount;
