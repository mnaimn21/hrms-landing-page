import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';


import BenefitCard from './BenefitCard';
import NumberCard from './NumberCard';
import benefit_photo from '../assets/benefit_photo.jpg'

import benefits from "../constant/benefit.json"
import numbers from "../constant/numbers.json"
import TitleAndSubtitle from './TitleAndSubtitle';

import { Element } from 'react-scroll'


const Benefits = () => {

    return (
        <Box component="section" py={4}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {benefits.data.map((item, index) =><BenefitCard item={item} index={index}/>)}
                </Grid>

                <Grid container my={4} spacing={4}>
                    <Grid item xs={12} lg={5} overflow="hidden">
                        <Box sx={{backgroundImage:`url(${benefit_photo})`, backgroundSize:"cover", backgroundPositionX:{xs:0, sm:-50, lg:-110}, backgroundRepeat:"no-repeat", borderRadius:2}} height={{xs:300, lg:500}} width={"100%"} />
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <Element name="about">
                            <TitleAndSubtitle title="You're No.1 HR Tech Solutions" subtitle="Connect your staff with our awesome HR tech platform"/>
                            <Box sx={{position:"relative", top:-48}} color="grey.dark">
                                <Typography mb={1} textAlign="justify" >HR technology, often referred to as HR tech, has developed rapidly in recent years, with large employers around the world widely adopting core HR technology systems from enterprise software companies such as Oracle and SAP, as well as specialized HR tech vendors. Many of these employers are entering a second generation of HR technology by migrating from their on-premises systems to cloud platforms, including SaaS. Meanwhile, small and midsized employers are also moving in large numbers to digitize their human resource functions, commonly turning to SaaS platforms or cloud-based HR technology outsourcing vendor</Typography>

                                <Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography mb={1} color="primary">
                                            Marketing
                                        </Typography>
                                        <Typography mb={1} color="primary">
                                            90%
                                        </Typography>
                                    </Box>
                                    <LinearProgress color="primary" variant="determinate" value={90} sx={{height:12, borderRadius:8, marginBottom:1}}/>
                                </Box>

                                <Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography mb={1} color="primary">
                                            SEO Analysis
                                        </Typography>
                                        <Typography mb={1} color="primary">
                                            87%
                                        </Typography>
                                    </Box>
                                    <LinearProgress color="primary" variant="determinate" value={87} sx={{height:12, borderRadius:8, marginBottom:1}}/>
                                </Box>
                                <Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography mb={1} color="primary">
                                            Web Automation
                                        </Typography>
                                        <Typography mb={1} color="primary">
                                            95%
                                        </Typography>
                                    </Box>
                                    <LinearProgress color="primary" variant="determinate" value={95} sx={{height:12, borderRadius:8, marginBottom:1}}/>
                                </Box>

                                <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                                    <Button variant="contained" size="large" disableRipple color="secondary" sx={{boxShadow: "none", color:"primary.main", fontWeight:"bold"}}>Get Started Now</Button> 
                                </Box>
                            </Box>
                        </Element>
                    </Grid>
                </Grid>
                <Box mt={8}>
                    <Grid container>
                        {numbers.data.map((item, index)=> <NumberCard item={item} index={index}/> )}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Benefits
