import { Box, Container, IconButton, ListItem, Stack } from "@mui/material";
import React, { useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom";
function Footer() {

    const setScrollToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <>
            <Box sx={{ backgroundColor: '#2a2a2a', py: "3rem" }}>
                <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray', py: '3rem', flexWrap: 'wrap' }}>
                    <Box sx={{}}>
                        <Stack sx={{ color: 'white' }}>
                            <ListItem sx={{ backgroundColor: 'transparent' }}><img src="Images/white-logo.png" alt="" /></ListItem>
                            <ListItem>
                                Tower I, Module 906, Webel IT Park Kolkata, West Bengal 700091
                            </ListItem>
                            <ListItem>sentientGeeks@company.com</ListItem>
                            <ListItem>010-020-0340</ListItem>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack sx={{ color: 'white' }}>
                            <ListItem sx={{ fontWeight: 900, fontSize: '1.2rem' }}> Shopping & Categories</ListItem>
                            <Link to='/men-product' onClick={() => setScrollToTop()}>
                                <ListItem sx={{ textDecoration: 'underline', color: 'white' }}>Men's Shopping</ListItem>
                            </Link>
                            <Link to='/women-product' onClick={() => setScrollToTop()}>
                                <ListItem sx={{ textDecoration: 'underline', color: 'white' }}>Women's Shopping</ListItem>
                            </Link>
                            <Link to='/kids-product' onClick={() => setScrollToTop()}>
                                <ListItem sx={{ textDecoration: 'underline', color: 'white' }}>Kid's Shopping</ListItem>
                            </Link>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack sx={{ color: 'white' }}>
                            <ListItem sx={{ fontWeight: 900, fontSize: '1.2rem' }}>Useful Links</ListItem>
                            <Link to='/' onClick={() => setScrollToTop()}>
                                <ListItem sx={{ textDecoration: 'underline', color: 'white' }}>Homepage</ListItem>
                            </Link>
                            <Link to='/about' onClick={() => setScrollToTop()}>
                                <ListItem sx={{ textDecoration: 'underline', color: 'white' }}>About Page</ListItem>
                            </Link>
                            <Link>
                                <ListItem sx={{ textDecoration: 'underline', color: 'white' }}>Help</ListItem>
                            </Link>
                            <Link to='/contact' onClick={() => setScrollToTop()}>
                                <ListItem sx={{ textDecoration: 'underline', color: 'white' }}>Contact Us</ListItem>
                            </Link>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack sx={{ color: 'white' }}>
                            <ListItem sx={{ fontWeight: 900, fontSize: '1.2rem' }}>Help & Information</ListItem>
                            <ListItem>Help</ListItem>
                            <ListItem>FAQs</ListItem>
                            <ListItem>Shipping</ListItem>
                            <ListItem>Tracking ID</ListItem>
                        </Stack>
                    </Box>
                </Container >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Stack sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ListItem sx={{ fontWeight: 300, fontSize: '1rem', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Copyright &copy; 2023.</ListItem>
                        <ListItem sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Design: Joydip Manna</ListItem>
                        <ListItem sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Distributed By: ThemeWagon</ListItem>
                    </Stack>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <IconButton sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FacebookIcon /></IconButton>
                    <IconButton sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><LinkedInIcon /></IconButton>
                    <IconButton sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><TwitterIcon /></IconButton>
                </Box>
            </Box >
        </>
    )
}
export default Footer;