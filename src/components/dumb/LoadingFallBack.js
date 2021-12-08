import React from 'react'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';



const LoadingFallBack = () => {
    return (
        <Box width="100vw" height="100vh" bgcolor="grey" sx={{display:"grid", placeItems:"center"}}>
            <CircularProgress color="primary"/>
        </Box>
    )
}

export default LoadingFallBack
