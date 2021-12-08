import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import TitleAndSubtitle from './TitleAndSubtitle';
import CustomerCard from './CustomerCard';

const Customers = () => {
    return (
        <Box component="section">
            <Box bgcolor="grey.light" py={8}>
                <Container maxWidth="lg">
                    <TitleAndSubtitle title="Our Customer" subtitle="We delivers the best service to our customer"/>
                    <Grid container spacing={2}>
                        {[...Array(6).keys()].map((item, index)=><CustomerCard item={item} key={index.toString()}/>)}
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default Customers
