import React, { useState, useEffect } from 'react'

import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { animateScroll as scroll } from 'react-scroll'



const ScrollToTop = () => {

    const [showIcon, setShowIcon] = useState(false)

    const handleScroll = () => {
        const position = window.pageYOffset;
        setShowIcon(position > 200 ? true : false)
    };

    const handleScrollToTop = () => {
        scroll.scrollToTop()
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, { passive: true });
        },[])

    return (
        <Box position="fixed" bottom={16} right={16} zIndex={100}>
            <Fade in={showIcon} timeout={300}>
                <IconButton onClick={()=>handleScrollToTop()}>
                    <ArrowUpwardIcon color="primary" sx={{fontSize:30}}/>
                </IconButton>
            </Fade>
        </Box>
    )
}

export default ScrollToTop
