import { createMuiTheme } from "@material-ui/core";

const lightTheme = createMuiTheme({
    palette: {
        background: {
            default: '#fafafa',
            paper: '#fff',
        },
        primary: {
            main: '#dbdbdb',
            // main:'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)'
        },
        text: {
            primary: '#000',
            secondary: '#8E8E8E',
        },
        type: 'light',
    },
    typography: {
        body1: {
            color: '#000'
        }
    }
})
export default lightTheme;