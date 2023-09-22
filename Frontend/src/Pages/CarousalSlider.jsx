import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, ListItem, Box } from '@mui/material'


function CarousalSlider(props) {
    var items = [
        {
            name: "Random Name 1",
            image: 'Images/kids.jpg',
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name 2",
            image: 'Images/kids-3.jpg',
            description: "Hello World!"
        },
        {
            name: "Random Name 3",
            image: 'Images/kids-4.jpg',
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Box sx={{ height: "25rem", mb: '1rem' }}>
            <Box sx={{ height: "25rem", mb: '1rem' }}>
                <img src={props.item.image} width='100%' alt="" />
            </Box>
        </Box>
    )
}
export default CarousalSlider;