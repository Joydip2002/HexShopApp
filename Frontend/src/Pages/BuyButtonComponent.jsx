import { Box } from '@mui/material'
import React from 'react'

function BuyButtonComponent() {
    return (
        <div>
            <Box sx={{display:'flex',justifyContent:'center', alignContent : 'center', minHeight:'100vh'}}>
                <stripe-buy-button
                    buy-button-id="buy_btn_1NpUIYSJq8hcq8qPrCK81BNe"
                    publishable-key="pk_test_51NpTJSSJq8hcq8qPS6OJNbi2G46ZN3y54AplJyppTpGRiZ28MJDxlU8jyjcd41nzvQtNWgFR6QGkASJYyyWkKB4D00dnqFQZXT"
                    cart-price='500'
                >
                </stripe-buy-button>
            </Box>
        </div>
    )
}

export default BuyButtonComponent
