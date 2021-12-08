import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';



const NumberCard = ({item, index}) => {


    const [isSensorActive, setIsSensorActive] = useState(true)
    const matches = useMediaQuery((theme) => theme.breakpoints.up('lg'))

    const disableSensor = (isVisible) => {
        if (isVisible){
            setIsSensorActive(false)
        }
    }

    if (index%2===0){
        return (
            <Grid item xs={6} lg={3} >
                <VisibilitySensor active = {isSensorActive} onChange={disableSensor} partialVisibility offset={{ bottom: 200 }}>
                    {({ isVisible }) => (
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={4}>
                        <Typography variant="h2" color="primary.light">{isVisible ? <CountUp end={item.number} duration="3" redraw={false}/> : null}</Typography>
                        <Typography variant="caption" color="grey.main" textAlign="center">{item.title}</Typography>
                    </Box>
                    
                       
                        
                            
                    )}
                </VisibilitySensor>
            </Grid>
        )
    }
    else {
        return (
            index === 3 && !matches ? null : <Divider orientation="vertical" flexItem style={{marginRight:"-1px"}} />
        )
    }
}

export default NumberCard
