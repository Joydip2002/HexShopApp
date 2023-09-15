import { Box, Button, CardMedia, Container, Icon, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseURL = process.env.REACT_APP_BASE_URL;

function Registration() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        mobile: '',
        password: '',
        errorList:[]
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const res = await axios.post(`${baseURL}/register`,formData);
            console.log(res);
            if(res.data.status === 200){
                Swal.fire({
                    title:'Register Successful',
                    icon : 'success',
                })
                setFormData({
                    name: '',
                    email: '',
                    address: '',
                    mobile: '',
                    password: '',
                })
                navigate('/login');
            }
            else{
                setFormData({
                    'errorList' : res.data.error
                })
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    const handleInputSubmit = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    return (
        <>
            <Container>
                <CardMedia sx={{ mt: 2 }}>
                    <img src="Images/logo.png" alt='logo' />
                </CardMedia>

                <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Box sx={{ width: '50%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <img src="Images/registration.jpeg" alt="register" width='100%' />
                    </Box>
                    <Box sx={{ padding: '0 5rem' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', flexDirection: 'column' }}>
                            <Typography variant='h5' component='div'>Welcome Back :)</Typography>
                            <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }} onSubmit={handleSubmit}>
                                <Box sx={{ fontSize: '13px' }}>Register with name, email, address, and password</Box>
                                <Box>
                                    <Icon sx={{ height: '100%' }}>
                                        <AccountCircleIcon />
                                    </Icon>
                                    <TextField
                                        size='small'
                                        name='name'
                                        label='Name'
                                        type='text'
                                        variant='outlined'
                                        placeholder='Enter Your Name'
                                        value={formData.name}
                                        required
                                        onChange={handleInputSubmit}
                                    />
                                </Box>
                                <Box>
                                    <Icon sx={{ height: '100%' }}>
                                        <EmailIcon />
                                    </Icon>
                                    <TextField
                                        size='small'
                                        name='email'
                                        type='email'
                                        label='Email'
                                        variant='outlined'
                                        placeholder='Enter Your email'
                                        value={formData.email}
                                        required
                                        onChange={handleInputSubmit}
                                    />
                                </Box>
                                <Box>
                                    <Icon sx={{ height: '100%' }}>
                                        <HomeIcon />
                                    </Icon>
                                    <TextField
                                        size='small'
                                        name='address'
                                        label='Address'
                                        type='text'
                                        variant='outlined'
                                        placeholder='Enter Your Address'
                                        value={formData.address}
                                        required
                                        onChange={handleInputSubmit}
                                    />
                                </Box>
                                <Box>
                                    <Icon sx={{ height: '100%' }}>
                                        <PhoneIcon />
                                    </Icon>
                                    <TextField
                                        size='small'
                                        name='mobile'
                                        type='tel'
                                        label='Mobile'
                                        variant='outlined'
                                        placeholder='Enter Your Mobile Number'
                                        value={formData.mobile}
                                        required
                                        onChange={handleInputSubmit}
                                    />
                                </Box>
                                <Box>
                                    <Icon sx={{ height: '100%' }}>
                                        <LockIcon />
                                    </Icon>
                                    <TextField
                                        size='small'
                                        type='password'
                                        name='password'
                                        label='Password'
                                        variant='outlined'
                                        placeholder='Enter password'
                                        value={formData.password}
                                        required
                                        onChange={handleInputSubmit}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', pl: '2rem' }}>
                                    <Button type="submit" variant='contained'>Register Now</Button>
                                </Box>
                            </form>
                        </Box>
                        <Typography sx={{ fontSize: '15px', textAlign: 'center',mt: 3 }}>Already have an account?&nbsp;<span style={{ color: 'blue' }}><Link to='/login'>Login</Link></span></Typography>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Registration
