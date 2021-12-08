import React from 'react'
import { ErrorMessage } from "formik"
import Typography from '@mui/material/Typography';




const CustomErrorMessage = (props) => {
    return (
        <ErrorMessage {...props} component={Typography} color="error" variant="subtitle2"/>
    )
}

export default CustomErrorMessage
