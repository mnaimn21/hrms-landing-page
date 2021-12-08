import React from 'react'
import Box from '@mui/system/Box'
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import CallIcon from '@mui/icons-material/Call';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {

    const FooterCategory = ({category}) => 
        <Typography variant="h6" textAlign={{xs:"center", lg:"left"}} mb={1}>{category}</Typography>

    return (
        <Box component="footer">
            <Box  bgcolor="primary.dark" color="white" py={4}>
                <Container maxWidth="lg">
                    <Grid container spacing={{xs:0, lg:4}}>
                        <Grid item xs={12} lg={3} >
                            <Box>
                                <FooterCategory category="About"/>
                                <Typography variant="body2" mb={2} textAlign="justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Typography>
                                <Divider sx={{display:{xs:"none",lg:"block"}}} />
                                <Link sx={{width:"100%",display:{xs:"none",lg:"flex", cursor:"pointer", textDecoration: 'none'}}} mt={2} alignItems="center" justifyContent={{xs:"center", lg:"flex-start"}} href="tel:+60136969696">
                                    <CallIcon  sx={{fontSize:{xs:20, lg:24}, marginRight:1.5, color:"white"}}/>
                                    <Typography variant="body2" color="white" textAlign={{xs:"center", lg:"left"}}>+60136969696</Typography>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            {/* <Divider sx={{display:{xs:"block",lg:"none"}}}/> */}

                            <Box>
                                <FooterCategory category="Links"/>
                                <Grid container>
                                    <Grid item xs={12} lg={6}>
                                        <Link href="#" sx={{ display:"block", marginBottom:1,  cursor:"pointer", textDecoration: 'none'}}>
                                            <Typography variant="body2" color="white" textAlign={{xs:"center", lg:"left"}}>Terms and Condition</Typography>
                                        </Link>
                                        <Link href="#" sx={{ display:"block", marginBottom:1,  cursor:"pointer", textDecoration: 'none'}}>
                                            <Typography variant="body2" color="white" textAlign={{xs:"center", lg:"left"}}>Refund Policy</Typography>
                                        </Link>
                                        <Link href="#" sx={{ display:"block", marginBottom:1,  cursor:"pointer", textDecoration: 'none'}}>
                                            <Typography variant="body2" color="white" textAlign={{xs:"center", lg:"left"}}>Privacy Policy</Typography>
                                        </Link>
                                        <Link href="#" sx={{ display:"block", marginBottom:1,  cursor:"pointer", textDecoration: 'none'}}>
                                            <Typography variant="body2" color="white" textAlign={{xs:"center", lg:"left"}}>Affliate</Typography>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <Link href="#" sx={{ display:"block", marginBottom:1,  cursor:"pointer", textDecoration: 'none'}}>
                                            <Typography variant="body2" color="white" textAlign={{xs:"center", lg:"left"}}>Careers</Typography>
                                        </Link>
                                        <Link href="#" sx={{ display:"block", marginBottom:1,  cursor:"pointer", textDecoration: 'none'}}>
                                            <Typography variant="body2" color="white" textAlign={{xs:"center", lg:"left"}}>Investor relations</Typography>
                                        </Link>
                                        <Link href="#" sx={{ display:"block", marginBottom:1,  cursor:"pointer", textDecoration: 'none'}}>
                                            <Typography variant="body2" color="white" textAlign={{xs:"center", lg:"left"}}>Agent login</Typography>
                                        </Link>
                                        <Link href="#" sx={{ display:"block", marginBottom:1,  cursor:"pointer", textDecoration: 'none'}}>
                                            <Typography variant="body2" color="white" textAlign={{xs:"center", lg:"left"}}>Newsroom</Typography>
                                        </Link>
                                    </Grid>
                                    
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={5}>
                            <Box textAlign={{xs:"center", lg:"left"}}>
                                <FooterCategory category="Contact Us"/>
                                <Typography variant="body2" color="white" textAlign={{xs:"center", lg:"left"}} mb={2}>Subscribe to our newsletter for more information</Typography>
                                <InputBase sx={{backgroundColor:"white", padding:0.5, width:"80%", fontSize:12}} mx={{xs:"auto", lg:0}}placeholder="Email Address" endAdornment={
                                <IconButton>
                                    <ArrowCircleRightIcon color="primary" />
                                </IconButton>
                                }/>
                            </Box>
                            <Box display="flex" gap={2} alignItems="center" mt={2} width="100%">
                                <Box display="flex" gap={2} width="100% " justifyContent={{xs:"center", lg:"flex-start"}}>
                                    <Link href="https://www.facebook.com" target="_blank" rel="noreferrer" display="flex" bgcolor="grey.light" sx={{"&: hover" : { backgroundColor:"primary.main"}}} width={32} height={32} justifyContent="center" alignItems="center" borderRadius={12}>
                                        <FacebookRoundedIcon color="primary" sx={{fontSize:18, "&: hover" : {color:"white"}}}/>
                                    </Link>
                                    <Link href="https://www.twitter.com" target="_blank" rel="noreferrer" display="flex" bgcolor="grey.light" sx={{"&: hover" : { backgroundColor:"primary.main"}}} width={32} height={32} justifyContent="center" alignItems="center" borderRadius={12} >
                                        <TwitterIcon color="primary" sx={{fontSize:18, "&: hover" : {color:"white"}}}/>
                                    </Link>
                                        <Link href="https://www.instagram.com" target="_blank" rel="noreferrer" display="flex" bgcolor="grey.light" sx={{"&: hover" : { backgroundColor:"primary.main"}}} width={32} height={32} justifyContent="center" alignItems="center" borderRadius={12}>
                                            <InstagramIcon color="primary" sx={{fontSize:18, "&: hover" : {color:"white"}}}/>
                                        </Link>
                                        <Link href="https://www.youtube.com" target="_blank" rel="noreferrer" display="flex" bgcolor="grey.light" sx={{"&: hover" : { backgroundColor:"primary.main"}}} width={32} height={32} justifyContent="center" alignItems="center" borderRadius={12}>
                                            <YouTubeIcon color="primary" sx={{fontSize:18, "&: hover" : {color:"white"}}}/>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default Footer
