import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';

import { makeStyles } from '@mui/styles';

import product_1 from "../assets/product_1.png"
import product_2 from "../assets/product_2.png"
import product_3 from "../assets/product_3.png"
import product_4 from "../assets/product_4.png"
import product_5 from "../assets/product_5.png"
import product_6 from "../assets/product_6.png"
import product_7 from "../assets/product_7.png"
import product_8 from "../assets/product_8.png"
import product_9 from "../assets/product_9.png"
import product_10 from "../assets/product_10.png"
import product_11 from "../assets/product_11.png"
import product_12 from "../assets/product_12.png"

const useStyle = makeStyles({
    a : {
        "&:hover ~ $b": {
            height: "100%",
            opacity: 1

        }
    },
    b: {
        "&:hover": {
            height: "100%",
            opacity: 1
        }
    }
})


const photo = [product_1,product_2,product_3,product_4,product_5,product_6,product_7,product_8,product_9,product_10,product_11,product_12]

const ProductCard = ({item, index}) => {

    const classes = useStyle()

    return(
        <Box position="relative" width={{xs:"100%", lg:"100%"}} maxWidth={345} sx={{margin:"0 auto"}}>
            <Paper className={classes.a}>
                <Box height={230} sx={{cursor:"pointer"}}>
                    <Box height={110} display="flex" alignItems="center" justifyContent="center" >
                        <Box component="img" src={photo[index]} height={100} />
                    </Box>
                    <Box height={120} bgcolor="grey.light" display="flex" alignItems="center" justifyContent="center" px={2}>
                        <Typography>{item.description}</Typography> 
                    </Box>
                </Box>
            </Paper>
            {/* <Box className={classes.b} gap={2} display="flex" justifyContent="center" alignItems="center" flexDirection="column" position="absolute" width="100%" height="0%" sx={{backgroundColor:"primary.main", cursor: "pointer" , overflow:"hidden",zIndex:20, bottom:0, transition:" opacity ease-in 0.3s",opacity:0}}>
                <Button color="primary" variant="contained">{item.name}</Button>
                <Button color="warning" variant="contained">Button2</Button>
            </Box> */}
        </Box>
        
)}

export default ProductCard
