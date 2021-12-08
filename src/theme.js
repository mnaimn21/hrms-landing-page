import {createTheme, responsiveFontSizes} from '@mui/material/styles';

import { grey } from '@mui/material/colors';


let theme = createTheme({ 
    palette: {
        primary : {
        // light: grey[200],
        main: "#00C19F",
        // dark: grey[700],
        },
        secondary : {
            // light: grey[200],
            main: "#FFE12B",
            // dark: grey[700],
            },
    grey: {
        light: grey[200],
        main: grey[500],
        dark: grey[700],
        },
    },
    typography: {
    button: {
        textTransform: 'none'
    }
    }
})

export default theme = responsiveFontSizes(theme)