import styled from "@emotion/styled";
import { Box, Card, CardActions, CardContent, CardMedia, Container, IconButton, Typography } from "@mui/material";
import React from "react";
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
import { Link } from "react-router-dom";

const Border = styled('div')(({ theme }) => ({
    'border': '2px solid gray',
    'border-style': 'dotted',
    'margin-top': '3rem'
}));

function WomenProducts({data}) {
    return (
        <div id="women-products">
            <Border></Border>
            <Container>
                <Box sx={{ py: 4 }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 900 }}>Women's Latest</Typography>
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
                            {item.category === 'womens-dresses' ?
                                <SwiperSlide>
                                    <Card sx={{ maxWidth: 340, my:'2rem' }} key={index}>
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
                                                <ShareIcon/>
                                        </CardActions>
                                    </Card>
                                </SwiperSlide> : ''
                            }
                        </>
                    ))}
                </Swiper>

            </Container>
        </div>
    )
}

export default WomenProducts