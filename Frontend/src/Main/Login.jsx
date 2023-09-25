import { Box, Button, CardMedia, Container, Icon, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import HomePage from '../Pages/HomePage';

function Login() {
    // const {history} = useHistory();
    const authData = localStorage.getItem('userData');
    // console.log(authData);
    const navigate = useNavigate();
    const [isLoginData, setLoginData] = useState({
        'email': '',
        'password': '',
        'error_list': []
    })

    useEffect(() => {
        if (authData) {
            navigate('/');
        }
    }, [authData])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/registerLogin', isLoginData);
            // console.log(res);
            if (res.data.status === 200) {
                // navigate('/');
                window.location.href = '/';
                localStorage.setItem('userData', isLoginData.email);
                sessionStorage.setItem('id', res.data.id);
            }
            else {
                navigate('/login');
            }
            setLoginData({
                'email': '',
                'password': '',
                'error_list': res.data.failed
            })
        } catch (error) {
            console.log(error);
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...isLoginData,
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
                        <img src="Images/login-image.png" alt="login" width='100%' />
                    </Box>
                    <Box sx={{ padding: '0 5rem' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', flexDirection: 'column' }}>
                            <Typography variant='h5' comoponent='div'>Welcome Back :)</Typography>
                            <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '2rem' }} onSubmit={handleSubmit}>
                                <Box sx={{ fontSize: '13px' }}>Login with email address and password</Box>
                                <span className='alert text-danger'>{isLoginData.error_list}</span>
                                <Box>
                                    <Icon sx={{ height: '100%' }}>
                                        <EmailIcon />
                                    </Icon>
                                    <TextField
                                        name='email'
                                        label='Username'
                                        variant='outlined'
                                        type='email'
                                        value={isLoginData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Box>
                                <Box>
                                    <Icon sx={{ height: '100%' }}>
                                        <LockIcon />
                                    </Icon>
                                    <TextField
                                        name='password'
                                        label='Password'
                                        variant='outlined'
                                        type='password'
                                        value={isLoginData.password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', pl: '2rem' }}>
                                    <Button type='submit' variant='contained'>Login Now</Button>
                                </Box>
                            </form>
                        </Box>
                        <Typography sx={{ fontSize: '15px', textAlign: 'center', mt: 3 }}>Don't have an account?&nbsp;<span style={{ color: 'blue' }}><Link to='/register'>Create Account</Link></span></Typography>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Login
