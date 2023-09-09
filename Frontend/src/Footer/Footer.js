import { Box, Container, IconButton, ListItem, Stack } from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
    return (
        <>
            <Box sx={{ backgroundColor: '#2a2a2a', py: "3rem" }}>
                <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray', py: '3rem', flexWrap: 'wrap' }}>
                    <Box sx={{}}>
                        <Stack sx={{ color: 'white' }}>
                            <ListItem sx={{ backgroundColor: 'transparent' }}><img src="Images/white-logo.png" alt="" /></ListItem>
                            <ListItem>
                                16501 Collins Ave, Sunny Isles Beach,
                                FL 33160, United States
                            </ListItem>
                            <ListItem>hexashop@company.com</ListItem>
                            <ListItem>010-020-0340</ListItem>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack sx={{ color: 'white' }}>
                            <ListItem sx={{ fontWeight: 900, fontSize: '1.2rem' }}> Shopping & Categories</ListItem>
                            <ListItem>Men's Shopping</ListItem>
                            <ListItem>Women's Shopping</ListItem>
                            <ListItem>Kid's Shopping</ListItem>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack sx={{ color: 'white' }}>
                            <ListItem sx={{ fontWeight: 900, fontSize: '1.2rem' }}>Useful Links</ListItem>
                            <ListItem>Homepage</ListItem>
                            <ListItem>About Page</ListItem>
                            <ListItem>Help</ListItem>
                            <ListItem>Contact Us</ListItem>
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
                        <ListItem sx={{ fontWeight: 300, fontSize: '1rem', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Copyright 0 2022 HexaShop Co., Ltd. All Rights Reserved.</ListItem>
                        <ListItem sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Design: TemplateMo</ListItem>
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