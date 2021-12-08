import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import SearchIcon from '@mui/icons-material/Search';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Contact = () => {
    return (
        <Box display={{xs:"none", lg:"block"}} sx={{ borderBottom: 0.5, borderColor:"lightgray" }}>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="space-between" alignItems="center" gap={4}>
                    <Box display="flex" alignItems="center" gap={4}>
                        <Link py={1} display="flex"  gap={1} alignItems="center" href="tel:+60136969696" underline="none">
                            <PhoneEnabledIcon color="primary" sx={{fontSize:18, "&: hover" : {
                                color:"primary.light"
                            }}}/>
                            <Typography color="primary" variant="caption" sx={{"&: hover" : {
                                color:"primary.light"
                            }}}>+60136969696</Typography>
                        </Link>
                        <Link py={1} display="flex" gap={1}  alignItems="center" href="mailto:m.naimn21@gmail.com" underline="none">
                            <MailOutlineIcon color="primary" sx={{fontSize:18, "&: hover" : {
                                color:"primary.light"
                            }}}/>
                            <Typography variant="caption" sx={{"&: hover" : {
                                color:"primary.light"
                            }}} color="primary" >ask@awesomehr.com</Typography>
                        </Link>
                    </Box>
                    <Box display="flex" gap={2} alignItems="center">
                        <Box display="flex" gap={2}>
                            <Link href="https://www.facebook.com" target="_blank" rel="noreferrer" display="flex" bgcolor="grey.light" sx={{"&: hover" : { backgroundColor:"primary.main"}}} width={24} height={24} justifyContent="center" alignItems="center" borderRadius={12}>
                                <FacebookRoundedIcon color="primary" sx={{fontSize:18, "&: hover" : {color:"white"}}}/>
                            </Link>
                            <Link href="https://www.twitter.com" target="_blank" rel="noreferrer" display="flex" bgcolor="grey.light" sx={{"&: hover" : { backgroundColor:"primary.main"}}} width={24} height={24} justifyContent="center" alignItems="center" borderRadius={12} >
                                <TwitterIcon color="primary" sx={{fontSize:18, "&: hover" : {color:"white"}}}/>
                            </Link>
                                <Link href="https://www.instagram.com" target="_blank" rel="noreferrer" display="flex" bgcolor="grey.light" sx={{"&: hover" : { backgroundColor:"primary.main"}}} width={24} height={24} justifyContent="center" alignItems="center" borderRadius={12}>
                                    <InstagramIcon color="primary" sx={{fontSize:18, "&: hover" : {color:"white"}}}/>
                                </Link>
                                <Link href="https://www.youtube.com" target="_blank" rel="noreferrer" display="flex" bgcolor="grey.light" sx={{"&: hover" : { backgroundColor:"primary.main"}}} width={24} height={24} justifyContent="center" alignItems="center" borderRadius={12}>
                                    <YouTubeIcon color="primary" sx={{fontSize:18, "&: hover" : {color:"white"}}}/>
                            </Link>
                        </Box>
                        <Box display={{xs:"none", lg:"block"}}>
                            <Grid container gap={2}>
                                <Divider orientation="vertical" flexItem />
                                <SearchIcon sx={{cursor:"pointer"}} color="secondary"/> 
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Contact
