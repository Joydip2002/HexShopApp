import React from "react";
import Navbar from "../Navbar/navbar";
import { Box, Card, CardActions, CardContent, CardMedia, Container, IconButton, Typography } from "@mui/material";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ShareIcon from '@mui/icons-material/Share';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackToTop from "./BackToTop1";
import { useApi } from "../Context/ApiContext";
function ManProduct() {
    const {data} = useApi();
    return (
        <>
            <Navbar />
            {/* <Box sx={{ height: "25rem", width: '100%', backgroundImage: "url('Images/girlshop-3.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', imageResolution: 'from-image 300dpi' }}>
                <Typography varient="h6" component="div" sx={{ position: 'absolute', transform: 'translate(-50%,-50%)', top: '50%', left: '50%', textAlign: 'center' }}>
                    <Stack>
                        <List sx={{ fontSize: "2rem", fontWeight: 900, color: 'white' }}> Women's Corner</List>
                        <List sx={{ color: 'white' }}>Awesome & Creative Men's Clothes Here</List>
                    </Stack>
                </Typography>
            </Box> */}
            <Container sx={{ my: '1rem' }}>
                <Box sx={{ py: 4 }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 900 }}>All Products Latest</Typography>
                    <Typography variant="" component="div" sx={{ fontStyle: 'italic', color: 'grey' }}>Details to details is what makes Hexashop different from the other themes.</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
                    {data.map((item, index) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Card sx={{ maxWidth: 345 }} key={index}>
                                <CardMedia
                                    sx={{ height: 340 }}
                                    image={item.thumbnail}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}                                    
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="h6" component='div'>{item.price} </Typography>
                                        <Box sx={{}} >
                                            <Link to={`/single-product-page/${item.id}`}><IconButton><RemoveRedEyeIcon /></IconButton></Link>
                                            {/* <IconButton><ShoppingCartIcon /></IconButton> */}
                                        </Box>
                                    <IconButton><ShareIcon /></IconButton>
                                </CardActions>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Container>
            <BackToTop />
            <Footer />
        </>
    )
}
export default ManProduct