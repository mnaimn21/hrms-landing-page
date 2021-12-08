import React,{useContext} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';
import banner_awesomehr from "../assets/banner_awesomehr.jpg"
import { AskForDemoContext } from '../../../context/AskForDemoContext';
import { Element } from 'react-scroll'





const Banner = () => {
    const {setShowAskForDemo} = useContext(AskForDemoContext)

    return (
        <Box component="section" id="banner">
             <Element name="home">
                <Box sx={{position:"relative", backgroundImage: `url(${banner_awesomehr})`, height:{xs:500, lg:650}, backgroundSize:"cover", backgroundPositionY:{xs:0, lg:-250}, backgroundPositionX:{xs:-110, sm:0, lg:0}, backgroundRepeat:"no-repeat"}}>
                    <Box sx={{position:"absolute", width:"100%", height:"100%", backgroundColor:"black", opacity:0.25, zIndex:10}}></Box>
                    <Box sx={{position:"absolute", width:"100%", height:"100%",zIndex:11, color:"white", fontSize:24}} >  
                        <Container maxWidth="lg" sx={{height:"100%"}}>
                            <Box height="100%" display="flex" flexDirection="column" gap={3} justifyContent="center" alignItems="center" data-aos="fade-up" data-aos-duration="1500">
                                <Typography variant="h5">Awesome HR</Typography> 
                                <Typography variant="h2" textAlign="center" fontWeight="bold">All-in-one HR software for small- and medium-sized businesses</Typography> 
                                <Button variant="contained" size="large" disableRipple color="secondary" sx={{boxShadow: "none", color:"primary.main", fontWeight:"bold"}} onClick={()=>setShowAskForDemo(true)}>Ask for a Demo</Button> 
                            </Box>
                        </Container>
                    </Box>
                </Box>
            </Element>
        </Box>
    )
}

export default Banner
