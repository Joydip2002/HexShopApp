import React from 'react';
import Navbar from '../Navbar/navbar';
import { Box, ButtonGroup, Card, CardMedia, Container, List,  Stack, Typography } from "@mui/material";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Footer from '../Footer/Footer';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import BackToTop from './BackToTop1.jsx';
function AboutPage() {
    return (
        <>
            <Navbar />
            <Box sx={{ height: "25rem", width: '100%', backgroundImage: "url('Images/contact-02.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', imageResolution: 'from-image 300dpi' }}>
                <Typography varient="h6" component="div" sx={{ position: 'absolute', transform: 'translate(-50%,-50%)', top: '50%', left: '50%', textAlign: 'center' }}>
                    <Stack>
                        <List sx={{ fontSize: "2.5rem", fontWeight: 900, color: 'white' }}>About Our Company</List>
                        <List sx={{ color: 'dark' }}> </List>
                    </Stack>
                </Typography>
            </Box>
            <Box sx={{ mt: '5rem', mb: '2rem'  }}>
                <Container sx={{ display: 'flex', justifyContent:'center',flexWrap:'wrap'}}>
                    <Box sx={{}}>
                        {/* <img src="single-product-01.jpg" alt="" /> */}
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image="Images/baner-right-image-03.jpg"
                        />
                    </Box>
                    <Box sx={{ ml: '1rem' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', borderBottom: '1px solid gray', pb: '1rem' }}>
                            <Box>
                                <Typography varient="h6" component="div" sx={{ fontSize: '2rem', fontWeight: 600 }}>About Us & Our Skills</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ my: '1rem', borderBottom: '1px solid gray' }}>
                            <Card sx={{ p: '1rem', color: 'GrayText' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis vitae amet quia sapiente doloremque rerum nesciunt? Corporis aliqua  </Card>
                            <Box sx={{ display: 'flex' }}>
                                <FormatQuoteIcon sx={{ rotate: '180deg', fontSize: '3rem' }} />
                                <Typography sx={{ p: '1rem', color: 'black' }}>
                                    Lorem ipsum dolor sit amet, consectetur .
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                            <ButtonGroup variant="outlined" aria-label="outlined button group" size="small" sx={{fontSize:'2rem'}}>
                                <FacebookIcon />
                                <LinkedInIcon />
                                <TwitterIcon />
                            </ButtonGroup>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <BackToTop/>
            <Footer />
        </>
    )
}
export default AboutPage