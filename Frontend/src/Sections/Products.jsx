import styled from "@emotion/styled";
import { Box, Card, CardActions, CardContent, CardMedia, Container, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ShareIcon from '@mui/icons-material/Share';
import data from '../data'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import axios from "axios";
// import Link from '@mui/material/Link';
// import axios from 'axios';


const Border = styled('div')(({ theme }) => ({
    'border': '2px solid gray',
    'border-style': 'dotted',
    'margin-top': '3rem'
}));

const productsHover = styled(Box)(({ theme }) => ({
    '&:hover': { backgroundColor: theme.palette.primary.main, zIndex: 1000, position: 'absolute', visibility: 'visible' },
}));
const API = "https://dummyjson.com/products?limit=100";
function Products({data}) {
    const [getData, setData] = useState([]);
    const theme = useTheme();
    
    // const [isBtnOpen, setBtnOpen] = useState('');
    // useEffect(() => {
    //     if (isBtnOpen !== "") {
    //         console.log(isBtnOpen);
    //     }
    // }, [isBtnOpen])

  

    return (
        <div id="men-products">

            <Border></Border>
            <Container>
                <Box sx={{ py: 4 }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 900 }}>Men's Latest</Typography>
                    <Typography variant="" component="div" sx={{ fontStyle: 'italic', color: 'grey' }}>Details to details is what makes Hexashop different from the other themes.</Typography>
                </Box>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {data.map((item, index) => (
                        <>
                            {item.category === 'mens-shirts' ?
                                <SwiperSlide>
                                    <Card sx={{ maxWidth: 345, my:'2rem'}} key={index + 1}>
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
                                                <Link to="/single-product-page"><IconButton><RemoveRedEyeIcon /></IconButton></Link>
                                                <IconButton><ShoppingCartIcon /></IconButton>
                                            </Box>
                                            <IconButton><ShareIcon /></IconButton>
                                        </CardActions>
                                    </Card>
                                </SwiperSlide> :''
                             } 
                        </>
                    ))}
                </Swiper>
            </Container>
            {/* <Button onClick={() => { setBtnOpen("Hii") }}>Submit</Button> */}
        </div>
    )
}

export default Products