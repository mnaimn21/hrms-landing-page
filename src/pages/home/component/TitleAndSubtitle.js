import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const TitleAndSubtitle = ({title, subtitle}) => {
    return (
        <Box mb={8}>
            <Typography variant="h5" component="p" fontWeight={400} textAlign="center" color="secondary">{title}</Typography>
            <Typography variant="h4" component="p" ontWeight={400} textAlign="center" color="primary">{subtitle}</Typography>
        </Box>
    )
}

export default TitleAndSubtitle
