import { Route, Routes } from 'react-router-dom';
import {ThemeProvider} from "@mui/material";
import './App.css';
import Profile from './components/pages/accountsettings/Profile';
import { theme } from './theme';

function App() {
  return (
   <>
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path='/' element={<Profile/>} />
    </Routes>
    </ThemeProvider>
   </>
  );
}

export default App;
