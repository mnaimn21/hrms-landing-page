import React from 'react'
import Box from '@mui/material/Box';

import ScrollToTop from '../../../components/dumb/ScrollToTop';


import AskForDemoModal from '../component/AskForDemoModal'

import Banner from "../component/Banner"
import Benefits from "../component/Benefits"
import Services from "../component/Services"
import Mission from "../component/Mission"
import Products from "../component/Products"
import Customers from "../component/Customers"


const Home = () => {
    return (
        <Box component="main">
            <AskForDemoModal/>
            <Banner/>
            <Benefits/>
            <Services/>
            <Mission/>
            <Products/>
            <ScrollToTop/>
            <Customers/>
        </Box>
    )
}

export default Home
