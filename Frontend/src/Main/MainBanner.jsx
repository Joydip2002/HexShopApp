import styled from "@emotion/styled";
import { Box, Button, CardMedia, Container, Grid, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { HashLink as Link } from 'react-router-hash-link';
import imagesAndCategories from '../navlinks'


const HoverBox = styled(CardMedia)(({ theme }) => ({
    '&:hover': { backgroundColor: theme.palette.primary.main, zIndex: 1000, position: 'absolute' },
}));


const ImageHoverCard = styled.div`
position: relative;
img {
  width: 100%;
}
.card {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
&:hover .card {
  display: block;
}
`;
const Border = styled('div')(({ theme }) => ({
    'border': '2px solid gray',
    'border-style': 'dotted',
    'margin': '1rem 0rem'
}));
function MainBanner() {
    const theme = useTheme();
    return (
        <>
            <Border></Border>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={6} sx={{ position: 'relative' }}>
                        <img
                            style={{ width: "100%" }}
                            src="Images/left-banner-image.jpg"
                            alt="Left Banner"
                        />
                        <Typography
                            sx={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%,-50%)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                fontSize: '1.5rem',
                                // display: { xs:{ fontSize: '1rem'}}
                            }}
                            variant="h6"
                            component="div"
                        >
                            <Stack>
                                <Container sx={{ fontWeight: 900, display: 'flex', justifyContent: 'center', fontSize: '1.7rem' }}>We Are Hexashop</Container>
                                <Typography variant="p" component="div" sx={{ fontSize: '.90rem', fontStyle: 'italic', display: 'flex', justifyContent: 'center' }}>Shopping Online and take many Benefits</Typography>
                                <Link to="/all-product" ><Button variant="outlined" size="medium" sx={{ width: '65%', mt: "2rem", color: 'white', outlineColor: 'white', fontWeight: 700 }}>Purchase Now</Button></Link>
                            </Stack>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>

                        <Grid container sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            {imagesAndCategories.map((item, index) => (
                                <Grid item xs={6} sx={{ position: 'relative' }} key={index}>
                                    <HoverBox theme={theme}>
                                        <Link to={item.Link} >
                                            <img
                                                style={{ width: "100%" }}
                                                src={item.image}
                                                alt={`${index + 1}`}
                                            />
                                        </Link>
                                    </HoverBox>
                                    <Typography
                                        sx={{
                                            position: 'absolute',
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%,-50%)',
                                            color: 'white',
                                            fontSize: '1.5rem'
                                        }}
                                        variant="h6"
                                        component="div"
                                    >
                                        <ListItem sx={{ fontWeight: 900, display: 'flex', justifyContent: 'center' }}>{item.category}</ListItem>
                                        <Typography variant="p" component="div" sx={{ fontSize: '.90rem', fontStyle: 'italic', display: 'flex', justifyContent: 'center' }}>Best Clothes for {item.category}</Typography>
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default MainBanner;