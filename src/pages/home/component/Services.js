import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import ServiceCard from './ServiceCard';
import TitleAndSubtitle from './TitleAndSubtitle';

import services from "../constant/services.json"
import { Element } from 'react-scroll'



const Services = () => {
    return (
        <Box component="section">
            <Box bgcolor="grey.light" height={{xs:"auto", lg:300}} py={8}>
                <Container maxWidth="lg" >
                    <Element name="service">
                        <TitleAndSubtitle title="Our Service" subtitle="We Empower Your HR Tech Software"/>
                        <Grid container spacing={2}>
                            {services.data.map((item,index) => <ServiceCard item={item} index={index} key={index.toString()}/>)}
                        </Grid>
                    </Element>
                </Container>
            </Box>
            <Box display={{xs: "none", lg: "block"}} height={300}>

            </Box>
        </Box>
    )
}

export default Services
