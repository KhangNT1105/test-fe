import light from './light';
import dark from './dark';
import { createMuiTheme } from '@material-ui/core';

const typeTheme = [light, dark];

const themes = (type: number) => createMuiTheme({
    ...typeTheme[type]
})

export default themes;