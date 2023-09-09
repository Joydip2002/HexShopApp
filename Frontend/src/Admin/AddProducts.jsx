import { Box, Button, Card, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from 'axios';
import Swal from 'sweetalert2'

function AddProducts() {
    const [pdata, setData] = useState({
        title: '',
        price: '',
        url: '',
        description: '',
        category: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/posts', pdata, {
                headers: {
                    'content-type': 'application/json',
                //  'Access-Control-Allow-Origin': 'csrfprotection-client.com' 
                },
                
            });
            Swal.fire({
                title:'Product Added Successfully!',
                icon : 'success',
            })
        } catch (error) {
            if (error.response) {
                console.error('Server Error:', error.response.data);
                console.error('Status Code:', error.response.status);
            } else if (error.request) {
                console.error('No Response:', error.request);
            } else {
                console.error('Error:', error.message);
            }
        }
    }
    
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...pdata,
            [name]: value,
        });
    }

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <Card sx={{ px: '2rem' }}>
                    <Typography variant='h6' component='div'>Add New Products</Typography>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <TextField size='small' style={{ margin: '1rem' }}
                                type="text"
                                label="Title"
                                name='title'
                                value={pdata.title}
                                variant="outlined"
                                onChange={handleInputChange}>
                            </TextField>
                            <TextField size='small' style={{ margin: '1rem' }}
                                type="number"
                                label="Price"
                                name='price'
                                value={pdata.price}
                                variant="outlined"
                                onChange={handleInputChange}>
                            </TextField>
                            <TextField size='small' style={{ margin: '1rem' }}
                                type="url"
                                label="Product Image Url"
                                name='url'
                                value={pdata.url}
                                variant="outlined"
                                onChange={handleInputChange}>
                            </TextField>
                            <TextField size='small' style={{ margin: '1rem' }}
                                type="text"
                                label="Description"
                                name='description'
                                value={pdata.description}
                                variant="outlined"
                                onChange={handleInputChange}>
                            </TextField>
                            <TextField size='small' style={{ margin: '1rem' }}
                                type="text"
                                label="Product Category"
                                name='category'
                                value={pdata.category}
                                variant="outlined"
                                onChange={handleInputChange}>
                            </TextField>
                            <Button type="submit" variant='contained' endIcon={<AddCircleIcon />} style={{ margin: '1rem' }}>Submit</Button>

                        </Box>
                    </form>
                </Card>
            </Box>
        </div>
    )
}

export default AddProducts
