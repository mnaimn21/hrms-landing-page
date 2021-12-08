import React, {useState, useEffect, useContext} from 'react'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer'

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import useMediaQuery from '@mui/material/useMediaQuery';

import awesomehr_logo from "../../assets/logo/awesomehr_logo.png"

import { scroller } from 'react-scroll'

import { AskForDemoContext } from '../../context/AskForDemoContext';




const Header = () => {

    const {setShowAskForDemo} = useContext(AskForDemoContext)

    const navButton = [
        {
            type : "link",
            path : "/",
            label : "Home",
            color : "primary"
        },
        {
            type : "link",
            path : "about",
            label : "About Us",
            color : "primary"
        },
        {
            type : "link",
            path : "service",
            label : "Service",
            color : "primary"

        },
        {
            type : "button",
            path : "/demo",
            label : "Ask for a Demo",
            color : "secondary"

        },
    ]

    const [openMobileDrawer, setOpenMobileDrawer] = useState(true)
    const NavBarMenu = ({item}) => {
        const {type, path, label, color} = item

        if (type === "link"){
            return(
                <Button sx={{
                    color,
                    cursor:"pointer",
                    textDecoration: 'none',
                    fontWeight:"bold",
                    "&: hover" : {
                    backgroundColor:"transparent",
                    textUnderlineOffset : 10,
                    textDecorationThickness: 2,
                    textDecorationLine: 'underline',
                }}}
                onClick={() => scrollToElement(path)}>{label}</Button>
                )
        }
        else {
            return(<Button onClick={()=>handleClickAskForDemo()}variant="contained" color={color} sx={{boxShadow: "none", color:"primary.main", fontWeight:"bold",}}disableRipple={true}>{label}</Button>)
        }
    } 

    const scrollToElement = (path) => {
        setOpenMobileDrawer(false)
        scroller.scrollTo(path, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset : -100
        })
    }

    const handleClickMenu = () => {
        setOpenMobileDrawer(!openMobileDrawer)
    }

    const handleClickAskForDemo = () => {
        setOpenMobileDrawer(false)
        setShowAskForDemo(true)
    }

    const matches = useMediaQuery((theme) => theme.breakpoints.up('lg'))

    useEffect(() => {
        matches && setOpenMobileDrawer(false)
    }, [matches])
    
    return (
        <Box component="header" position="sticky" top={0} left={0} zIndex={20} sx={{backgroundColor:"white"}}>
            <Container maxWidth="lg">
                <Box py={1.5} display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex" gap={1} alignItems="center">
                        <Box display={{xs:"block", lg:"none"}}>
                            <IconButton onClick={handleClickMenu}>
                                <MenuIcon color="primary" sx={{fontSize:30}}/>
                            </IconButton>
                        </Box>
                        <Link href="/">
                            <Box component="img" alt="Awesome HR" src={awesomehr_logo} width={{xs:32, lg:48}}/>
                        </Link>
                    </Box>
                    <Box display={{xs:"block", lg:"none"}}>
                        <IconButton>
                            <SearchIcon color="secondary"/>
                        </IconButton>
                    </Box>
                    <Box display={{xs:"none", lg:"flex"}} alignItems="center" gap={4}>
                        {navButton.map(item => <NavBarMenu item={item}/>)}
                    </Box>
                </Box>
            </Container>
            <Drawer open={openMobileDrawer} onClose={handleClickMenu} width={"25%"}>
                <Box width={300}>
                    <Box display="flex" justifyContent="flex-end">
                        <IconButton onClick={handleClickMenu}>
                            <CloseIcon color="primary"/>
                        </IconButton>
                    </Box>
                    <Box textAlign="center">
                        <Box component="img" alt="Awesome HR" src={awesomehr_logo} width={{xs:80, lg:48}} sx={{margin:"0 auto"}}/>
                    </Box>
                    <Grid container>
                    {navButton.map((item) => 
                    <Grid item xs={12}>
                        <Box my={2} textAlign="center">
                            <NavBarMenu item={item}/>
                        </Box>
                    </Grid>
                    )}
                    </Grid>
                </Box>
            </Drawer>
        </Box>
    )
}

export default Header
