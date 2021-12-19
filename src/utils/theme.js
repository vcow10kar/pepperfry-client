import {createTheme} from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#F16521'
        },

        secondary: {
            main: '#4A90E2'
        }
    },

    components :{
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    width: '262px',
                    height: '48px',
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: '500',
                    borderRadius: '2px',
                    fontFamily: 'Fira Sans, sans-serif',

                    '&:hover': {
                        backgroundColor: '#FF7634'
                    }
                }

            }
        },

        // MuiCheckbox: {
        //     styleOverrides: {
        //         root: {
        //             width: '16px',
        //             height: '16px',
        //         }
        //     }
        // }
    }
})

export default theme;