import { AppBar, Box, Container, IconButton, MenuItem, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const pages = [
    { category: 'Home', Link: '/' },
    { category: "Men's", Link: '/men-product' },
    { category: "Women's", Link: '/women-product' },
    { category: "Kid's", Link: '/kids-product' },
    { category: 'Accessories', Link: '/accessories-product' },
    { category: 'Contact', Link: '/contact' },
    { category: 'About', Link: '/about' },
];

function Navbar() {
    const [isOpenMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!isOpenMenu);
    };

    return (
        <>
            <Box>
                <AppBar sx={{ backgroundColor: "transparent", py: 1, position: 'sticky', top: '0' }}>
                    <Toolbar>
                        <Container sx={{ display: "flex" }}>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="a" component="div">
                               <Link to="/"> <img src="Images/logo.png" alt="" /></Link>
                            </Typography>
                            <Box sx={{ color: "black", justifyContent: "center", alignItems: "center", display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                                {pages.map((page, index) => (
                                    <MenuItem key={index}>
                                        <Link to={page.Link} textAlign="center" style={{ textDecoration: 'none',color:'black' }} >{page.category}</Link>
                                    </MenuItem>
                                ))}
                            </Box>
                            <IconButton sx={{ display: { md: 'none' } }} onClick={toggleMenu}>
                                <MenuIcon />
                            </IconButton>
                        </Container>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer anchor="top" open={isOpenMenu} onClose={toggleMenu}>
                <Box sx={{ display: 'flex', justifyContent: "space-between", backgroundColor: '#f7f5f0', p: 1 }}>
                    <img src="Images/logo.png" alt="" />
                    <CloseIcon onClick={toggleMenu} />
                </Box>
                <List>
                    {pages.map((page, index) => (
                        <MenuItem key={index}>
                            <Link to={page.Link} textAlign="center" style={{ textDecoration: 'none',color:'black'}} >{page.category}</Link>
                        </MenuItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}

export default Navbar;
