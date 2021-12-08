import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel'

import ProductCard from './ProductCard';
import TitleAndSubtitle from './TitleAndSubtitle';

import products from '../constant/products.json'
import bg_product from "../assets/bg_product.jpg"


const Products = () => {
    return (
        <Box sx={{backgroundSize:"cover", backgroundImage:`url(${bg_product})`, backgroundAttachment:"fixed", position:"relative"}}>
            <Box sx={{position:"absolute", backgroundColor:"black", opacity:0.25, width:"100%", height:"100%", zIndex:-1}}/>
            <Box py={8}>
        1       <Container maxWidth="lg">
                    <TitleAndSubtitle title="Our Products" subtitle="We produce the best HRMS products in the market"/>
                    <Box display={{xs:"none", lg:"block"}}>
                        <Grid container spacing={4}>
                            {products.data.map((item,index) => 
                                <Grid item xs={6} lg={3} key={index.toString()}>
                                    <ProductCard item={item} index={index}/>
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                    <Box display={{xs:"block", lg:"none"}}>
                        <Carousel autoPlay animation="slide" navButtonsAlwaysInvisible={true} indicators={false}>
                            {products.data.map((item,index) => <ProductCard item={item} index={index} key={index.toString()}/>)}
                        </Carousel>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default Products
