import { createMuiTheme } from "@material-ui/core";

const darkTheme = createMuiTheme({
    palette: {
        background: {
            default: '#18191b',
            paper: '#252526'
        },
        primary: {
            main: '#3f3f40',

            // main:'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)'
        },
        text: {
            primary: '#fff',
            secondary: '#fff'
        },

        type: 'dark'
    },
    typography: {
        body1: {
            color: '#fff'
        }
    }
})
export default darkTheme;