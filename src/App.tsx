import { ThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack'
import Routes from 'routes/routes';
import './i18n/i18n';
import themes from 'themes';
import { useSelector } from 'react-redux';
import { themeSelector } from 'selectors/app/appSelectors';

function App() {
  const theme = useSelector(themeSelector);
  const themeType = theme === 'light' ? 0 : 1;
  return <ThemeProvider theme={themes(themeType)}>
    <SnackbarProvider>
        <Routes />
    </SnackbarProvider>
  </ThemeProvider>
}

export default App;
