import {createTheme} from '@mui/material';

const theme = createTheme({
    type: 'light',
    palette: {
        primary: {
            main: '#f16521'
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
                }
            }
        }
    }
})

export default theme;