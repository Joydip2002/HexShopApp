import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import { Box, Button, Container, List, Stack, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Footer from '../Footer/Footer';
import BackToTop from './BackToTop1.jsx';
import Login from '../Main/Login';
import axios from 'axios';
import Swal from 'sweetalert2';
import CircularProgress from '@mui/material/CircularProgress';

const baseURL = process.env.REACT_APP_BASE_URL;

function ContactUsPage() {
    const initialData = {
        name: '',
        email: '',
        message: ''
    }
    const [isLoading, setIsLoading] = useState(false);
    const [getData, setData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...getData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(getData);
        setIsLoading(true)
        try {
            const res = await axios.post(`${baseURL}/contact`, getData);
            console.log(res.data.success);
            Swal.fire({
                title: `${res.data.success},Thank you for contacting us`,
                icon: "success"
            })
            setData(initialData);
            setIsLoading(false)
            
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    if (!localStorage.getItem('userData')) {
        return <Login />
    }

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
                <Container sx={{ my: 1, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <Box>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.9576027284534!2d88.43372377428612!3d22.58068897948599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027568f52ad6ed%3A0x6f51858ecab3a2ff!2sSentientGeeks!5e0!3m2!1sen!2sin!4v1694494723862!5m2!1sen!2sin"
                            width="600" height="450"
                            style={{ border: 0 }}
                            // allowFullScreen=""
                            loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography varient='h6' component='div' sx={{ fontSize: '2rem', fontWeight: 800, my: '1rem' }}>Say Hello. Don't Be Shy!</Typography>
                        
                        {/* Using Formspree */}
                        {/* <form style={{ border: '1px solid gray', borderRadius: '10px' }} method='POST' action='https://formspree.io/f/xrgwlzde'>
                            <Box>
                                <TextField
                                    style={{ margin: '1rem' }}
                                    type="text"
                                    name='name'
                                    label="Enter Name"
                                    variant="outlined"
                                    autoComplete='off'
                                />
                                <TextField
                                    style={{ margin: '1rem' }}
                                    type="text"
                                    name='email'
                                    label="Enter Email"
                                    variant="outlined"
                                    autoComplete='off'
                                />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <TextField
                                    style={{ width: '100%', margin: '1rem' }}
                                    type="text"
                                    name='message'
                                    label="Massage"
                                    variant="outlined"
                                    autoComplete='off'
                                />
                            </Box>
                            <Button type='submit' endIcon={<SendIcon />} size='large' sx={{ margin: '1rem' }} variant="contained">Submit</Button>
                        </form> */}
                         {isLoading && <CircularProgress />}
                        <form style={{ border: '1px solid gray', borderRadius: '10px' }} onSubmit={handleSubmit}>
                            <Box>
                                <TextField
                                    style={{ margin: '1rem' }}
                                    type="text"
                                    name='name'
                                    label="Enter Name"
                                    variant="outlined"
                                    autoComplete='off'
                                    value={getData.value}
                                    onChange={handleChange}
                                />
                                <TextField
                                    style={{ margin: '1rem' }}
                                    type="text"
                                    name='email'
                                    label="Enter Email"
                                    variant="outlined"
                                    autoComplete='off'
                                    value={getData.value}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <TextField
                                    style={{ width: '100%', margin: '1rem' }}
                                    type="text"
                                    name='message'
                                    label="Massage"
                                    variant="outlined"
                                    autoComplete='off'
                                    value={getData.value}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Button type='submit' endIcon={<SendIcon />} size='large' sx={{ margin: '1rem' }} variant="contained">Submit</Button>
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