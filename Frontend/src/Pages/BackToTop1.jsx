import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function BackToTop() {

    function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <>
            <Button variant="contained" sx={{ borderRadius: '100px', position: 'fixed', bottom: '40px', right: '40px',zIndex:1000 }} onClick={scrollToTop}><KeyboardArrowUpIcon /></Button>
        </>
    )
}
export default BackToTop