import Header from "./components/Header";
import * as React from 'react';
import { createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  palette:{
    primary:{
      main:'#bf8e3a',
    },
  mode: 'dark',
  }
});



function App() {
  return (
   <ThemeProvider theme={theme}> 
        <Header/>
    </ThemeProvider>
  );
}

export default App;
