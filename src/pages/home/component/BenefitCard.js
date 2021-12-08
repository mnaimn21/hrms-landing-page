
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import settings from "../assets/settings.png"
import payment from "../assets/payment.png"
import cloud_service from "../assets/cloud-service.png"

const BenefitCard = ({item, index}) => {

    const icons = [settings, payment, cloud_service]
    return(
    <Grid item xs={12} lg={4}>
        <Paper sx={{ maxWidth: 345, marginX:"auto" }}>
            <Box height={64} width="100%" bgcolor="primary.main"/>
            <Box p={2} >
                <Grid container mb={2}>
                    <Grid item xs={4} justify="center">
                        <Box width={"100%"} height="100%" display="flex" alignItems="center" justifyContent="center">
                            <Box component="img" src={icons[index]}/>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Box width={"100%"} height="100%" display="flex" alignItems="center">
                            <Typography variant="h5"fontWeight="bold" color="primary">{item.title}</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Typography variant="body2" color="grey.dark" textAlign="justify">{item.description}</Typography>
            </Box>
        </Paper>
    </Grid>
    )
}

export default BenefitCard