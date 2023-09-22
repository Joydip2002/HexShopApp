import { Box, CardMedia } from '@mui/material';
import React from 'react';
import Login from '../Main/Login';

function ErrorPage() {
    if (!localStorage.getItem('userData')) {
        return <Login />
    }
    return (
        <>
            <Box>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100%"
                    width="100%"
                    image="Images/CodePen-404-Page.gif"
                />
            </Box>
        </>
    )
}
export default ErrorPage;