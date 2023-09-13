import { Box, Button, CardMedia, Container, Icon, TextField, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

function Login() {
    return (
        <>
            <Container>
                <CardMedia sx={{ mt: 2 }}>
                    <img src="Images/logo.png" alt='logo' />
                </CardMedia>

                <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Box sx={{ width: '50%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <img src="Images/login-image.png" alt="admin" width='100%' />
                    </Box>
                    <Box sx={{ padding: '0 5rem' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', flexDirection: 'column' }}>
                            <Typography variant='h5' comoponent='div'>Welcome Back :)</Typography>
                            <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '2rem' }}>
                                <Box sx={{ fontSize: '13px' }}>Login with email address and password</Box>
                                <Box>
                                    <Icon sx={{ height: '100%' }}>
                                        <EmailIcon />
                                    </Icon>
                                    <TextField
                                        name='email'
                                        label='Username'
                                        variant='outlined'
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
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', pl: '2rem' }}>
                                    <Button variant='contained'>Login Now</Button>
                                </Box>
                            </form>
                        </Box>
                        <Typography sx={{ fontSize: '15px' }}>Don't have an account?&nbsp;<span style={{color:'blue'}}>Create Account</span></Typography>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Login
