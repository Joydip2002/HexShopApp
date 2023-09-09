import React, { useState } from "react";
import Navbar from "../Navbar/navbar";
import { Box, Button, ButtonGroup, Card, CardMedia, Container, List, Rating, Stack, Typography } from "@mui/material";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Footer from "../Footer/Footer";
import BackToTop from "./BackToTop1.jsx";

function SingleProductsPage() {
    const [isSetData, setData] = useState(1);
    return (
        <>
            <Navbar />
            <Box sx={{ height: "25rem", width: '100%', backgroundImage: "url('Images/singlepage.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', imageResolution: 'from-image 300dpi' }}>
                <Typography varient="h6" component="div" sx={{ position: 'absolute', transform: 'translate(-50%,-50%)', top: '50%', left: '50%', textAlign: 'center' }}>
                    <Stack>
                        <List sx={{ fontSize: "2rem", fontWeight: 900, color: 'white' }}> Single Product Page</List>
                        <List sx={{ color: 'white' }}>Awesome & Creative HTML CSS layout by TemplateMo</List>
                    </Stack>
                </Typography>
            </Box>
            <Box sx={{ mt: '5rem', mb: '2rem' }}>
                <Container sx={{ display: 'flex' }}>
                    <Box sx={{}}>
                        {/* <img src="single-product-01.jpg" alt="" /> */}
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="100%"
                            width="100%"
                            image="Images/single-product-01.jpg"
                        />
                    </Box>
                    <Box sx={{ ml: '1rem' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', borderBottom: '1px solid gray', pb: '1rem' }}>
                            <Box>
                                <Typography varient="h6" component="div" sx={{ fontSize: '1.4rem', fontWeight: 600 }}>New Green Jacket</Typography>
                                <Typography varient="h6" component="div" sx={{ fontSize: '1.2rem', fontWeight: 600, color: 'gray' }}>$75.00</Typography>
                            </Box>
                            <Box>
                                <Rating name="half-rating" size="small" defaultValue={5} precision={0.5} />
                            </Box>
                        </Box>
                        <Box sx={{ my: '1rem', borderBottom: '1px solid gray' }}>
                            <Card sx={{ p: '1rem', color: 'GrayText' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis vitae amet quia sapiente doloremque rerum nesciunt? Corporis aliqua </Card>
                            <Box sx={{ display: 'flex' }}>
                                <FormatQuoteIcon sx={{ rotate: '180deg', fontSize: '3rem' }} />
                                <Typography sx={{ p: '1rem', color: 'black' }}>
                                    Lorem ipsum dolor sit amet, consectetur .
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                            <Typography>No. of Orders</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <ButtonGroup variant="outlined" aria-label="outlined button group" size="small">
                                    <Button onClick={() => setData(isSetData + 1)} ><AddIcon /></Button>
                                    <Button>{isSetData}</Button>
                                    <Button onClick={() => (isSetData > 1 ? setData(isSetData - 1) : setData(1))}><RemoveIcon /></Button>
                                </ButtonGroup>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <BackToTop/>
            <Footer />
        </>
    )
}
export default SingleProductsPage