import {ThemeProvider} from "@mui/material";
import './App.css';
import RoutesPath from "./components/routepath/RoutesPath";
import { theme } from './theme';

function App() {
  return (
   <>
    <ThemeProvider theme={theme}>
       <RoutesPath />
    </ThemeProvider>
   </>
  );
}

export default App;
