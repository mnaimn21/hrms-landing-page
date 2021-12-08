import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import service_1 from "../assets/service_1.jpg"
import service_2 from "../assets/service_2.jpg"
import service_3 from "../assets/service_3.jpg"

const ServiceCard = ({item, index}) => {

    const image = [service_1, service_2, service_3]
    return (
        <Grid item xs={12} lg={4} >
            <Card sx={{ maxWidth: 345, marginX:"auto", boxShadow:1, cursor: "pointer","&: hover" : {boxShadow:"0px 3px #00C19F"}}}>
                <Box sx={{overflow:"hidden", height:"190"}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="190"
                        image={image[index]}
                        sx={{"&: hover": {transform:"scale(1.15)"},transition:" all linear 0.7s"}}
                    />
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign="justify">
                    {item.description}
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </Grid>
    )
}

export default ServiceCard
