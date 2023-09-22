import { AppBar, Box, Container, IconButton, MenuItem, Toolbar, Typography, Drawer, List, Button, Menu } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
// import { Link } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { HashLink as Link } from 'react-router-hash-link';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from "../Context/CartContext";
import { useCartApi } from "../Context/CartApiContextB";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    const [getUser, setUser] = useState('');
    // const{cart} = useCartContext();
    const { cartData } = useCartApi();
    const itemCount = cartData.length;
    const [isOpenMenu, setOpenMenu] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const toggleMenu = () => {
        setOpenMenu(!isOpenMenu);
    };

    const handleLoginLogout = () => {
        if (getUser) {
            localStorage.removeItem('userData');
            setUser(null);
            navigate('/login')
        } else {
            navigate('/login')
        }
    };
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        setUser(localStorage.getItem('userData'));
    })

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
                                        <Link to={page.Link}  style={{ textDecoration: 'none', color: 'black' }} >{page.category}</Link>
                                    </MenuItem>
                                ))}
                            </Box>
                            <Box sx={{ color: "black", justifyContent: "center", alignItems: "center", mt: 1 }}>
                                <Link to='/my-cart'>
                                    <IconButton aria-label="cart">
                                        <Badge badgeContent={itemCount > 0 ? itemCount : 0} color="secondary">
                                            <ShoppingCartIcon />
                                        </Badge>
                                    </IconButton>
                                </Link>
                            </Box>
                            <IconButton
                                // size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                            // color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                                <Link to='/my-account' style={{ textDecoration: 'none', color: 'black' }}><MenuItem onClick={handleClose}>My account</MenuItem></Link>
                                <MenuItem onClick={handleClose}> <Button size="small" sx={{}} variant='contained' onClick={handleLoginLogout}>{getUser ? 'logout' : 'login'}</Button></MenuItem>
                            </Menu>

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
                            <Link to={page.Link} textAlign="center" style={{ textDecoration: 'none', color: 'black' }} >{page.category}</Link>
                        </MenuItem>
                    ))}
                    <Button size="small" sx={{ width: '100%' }} variant='contained' onClick={handleLoginLogout}>{getUser ? 'logout' : 'login'}</Button>

                </List>
            </Drawer>
        </>
    );
}

export default Navbar;
