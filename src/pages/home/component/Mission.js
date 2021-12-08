import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import mission from "../assets/mission.jpg"

const Mission = () => {
    return (
        <Box bgcolor="primary.light" display="flex" position="relative">
            <Box height={250} width={{xs:"100%", lg: "55%"}}/>
            <Box height={250} display={{xs:"none", lg: "block"}} width={"15%"} bgcolor="secondary.main"/>
            <Box height={250} display={{xs:"none", lg: "block"}} width={"30%"} sx={{backgroundImage:`url(${mission})`}}/>
            <Box position="absolute" width={"100%"} height={"100%"}>
                <Container maxWidth="lg" sx={{height:"100%"}}>
                    <Box width={{xs:"100%", lg: "50%"}} height={"100%"} display="flex" alignItems="center">
                        <Typography variant="h3" sx={{color:"white"}} textAlign={{xs:"center", lg: "left"}} fontWeight="bold">We do the best for our clients</Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default Mission
