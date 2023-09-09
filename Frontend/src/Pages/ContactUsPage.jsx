import React from 'react';
import Navbar from '../Navbar/navbar';
import { Box, Button, Container, List, Stack, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Footer from '../Footer/Footer';
import BackToTop from './BackToTop1.jsx';

function ContactUsPage() {

    return (
        <>
            <Navbar />
            <Box sx={{ height: "25rem", width: '100%', backgroundImage: "url('Images/contact-02.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', imageResolution: 'from-image 300dpi' }}>
                <Typography varient="h6" component="div" sx={{ position: 'absolute', transform: 'translate(-50%,-50%)', top: '50%', left: '50%', textAlign: 'center' }}>
                    <Stack>
                        <List sx={{ fontSize: "2.5rem", fontWeight: 900, color: 'white' }}>Contact Us</List>
                        <List sx={{ color: 'dark' }}>Contact Us regarding any type of issue</List>
                    </Stack>
                </Typography>
            </Box>
            <Box>
                <Container sx={{ m: '5rem' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography varient='h6' component='div' sx={{ fontSize: '2rem', fontWeight: 800, my: '1rem' }}>Say Hello. Don't Be Shy!</Typography>
                        <form style={{ border: '1px solid gray', borderRadius: '10px' }}>
                            <Box>
                                <TextField
                                    style={{ margin: '1rem' }}
                                    type="text"
                                    label="Enter Name"
                                    variant="outlined"
                                />
                                <TextField
                                    style={{ margin: '1rem' }}
                                    type="text"
                                    label="Enter Email"
                                    variant="outlined"
                                />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <TextField
                                    style={{ width: '100%', margin: '1rem' }}
                                    type="text"
                                    label="Massage"
                                    variant="outlined"
                                />
                            </Box>
                            <Button endIcon={<SendIcon />} size='large' sx={{ margin: '1rem' }} variant="contained">Submit</Button>
                        </form>
                    </Box>

                </Container>
            </Box>
            <BackToTop />
            <Footer />
        </>
    )
}
export default ContactUsPage