import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import company_1 from "../assets/company_1.png"
import company_2 from "../assets/company_2.png"
import company_3 from "../assets/company_3.png"
import company_4 from "../assets/company_4.png"
import company_5 from "../assets/company_5.png"
import company_6 from "../assets/company_6.png"

const company_photo_array = [company_1,company_2,company_3,company_4,company_5,company_6]


const CustomerCard = ({item}) => {
    return (
        <Grid item xs={6} lg={2} >
            <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                <Box component="img" src= {company_photo_array[1]} maxWidth={150} height={80}/>
            </Box>
        </Grid>
    )
}

export default CustomerCard
