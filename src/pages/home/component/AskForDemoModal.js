import React,{useContext, useRef} from 'react'
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AskForDemoContext } from '../../../context/AskForDemoContext';
import Checkbox from '@mui/material/Checkbox';
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import CustomErrorMessage from '../../../components/smart/CustomErrorMessage';


const AskForDemoModal = () => {

    const {showAskForDemo, setShowAskForDemo} = useContext(AskForDemoContext)

    const innerRef = useRef()

    const onClose = () => {
     setShowAskForDemo(false)
    }

    const initialValues = {
        name : "",
        company_name : "", 
        email : "",
        phone_number : "",
        agreeTnC : false
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is a required field"),
        company_name: Yup.string().required("Company is a required field"),
        email: Yup.string().email("Please key in a proper email").required("Email is a required field"),
        phone_number: Yup.number().required("Phone number is required").typeError('Please key in digit'),
        agreeTnC : Yup.boolean().required().oneOf([true],'You must agree to our terms and condition to proceed')
    })

    const onSubmitForm = (values)=> {
        alert(JSON.stringify(values, null, 4))
    }

    const formikProp = {
        initialValues,
        validationSchema,
        innerRef,
        
    }

    const handleChechBox = (e) => {
        const {checked} = e.target
        innerRef.current.setFieldValue("agreeTnC", checked)
            // if(checked){
            //     console.log("checked")
            //     innerRef.current.setFieldValue("agreeTnC", checked)

            // }
            // else{
            //     console.log("UNchecked")
            //     innerRef.current.setFieldValue("agreeTnC", checked)
            // }
    }

    return (
        <Dialog open={showAskForDemo} fullWidth maxWidth="xs" onClose={onClose}>
            <Box py={2} px={2}>
                <Typography color="primary" variant="h5" textAlign="center" mb={2} sx={{fontWeight:"bold"}}>Request A Demo</Typography>
                    <Formik {...formikProp} onSubmit={(values,action)=>onSubmitForm(values,action)}>
                        {({errors, touched, handleSubmit, handleChange, handleBlur})=><Form>
                            <Box display="flex" width="100%" flexDirection="column" gap={2}>
                                <Box>
                                    <Field as={TextField} onBlur={handleBlur} onChange={handleChange} name="name" fullWidth placeholder="Your name"/>
                                    <CustomErrorMessage name="name"/>
                                </Box>
                                <Box>
                                    <Field as={TextField} onBlur={handleBlur} onChange={handleChange} name = "company_name" fullWidth placeholder="Your company"/>
                                    <CustomErrorMessage name="company_name"/>
                                </Box>
                                <Box>
                                    <Field as={TextField} onBlur={handleBlur} onChange={handleChange} name = "email" fullWidth placeholder="Your email"/>
                                    <CustomErrorMessage name="email"/>
                                </Box>
                                <Box>
                                    <Field as={TextField} type="tel" onBlur={handleBlur} onChange={handleChange} name="phone_number" fullWidth placeholder="Your phone number"/>
                                    <CustomErrorMessage name="phone_number"/>
                                </Box>
                                <Box display="flex" width="100%">
                                    <Checkbox onChange={(e)=> {handleChechBox(e)}} onClick={()=>innerRef.current.setFieldTouched("agreeTnC", true)}/>
                                    <Typography variant="caption"> I have read and agreed with Awesome HR <Link component="span" variant="caption" color="primary" sx={{cursor:"pointer"}}>Privacy Policy</Link> and <Link component="span" variant="caption" color="primary" sx={{cursor:"pointer"}}>Terms of Use</Link></Typography>
                                </Box>
                                    <CustomErrorMessage name="agreeTnC"/>
                                <Button onClick={handleSubmit}color="secondary" variant="contained" sx={{boxShadow: "none", color:"primary.main", fontWeight:"bold",}} fontSize="large" fullWidth disableRipple>Submit</Button>
                            </Box>
                        </Form>}
                    </Formik>
            </Box>
        </Dialog>
    )
}

export default AskForDemoModal
