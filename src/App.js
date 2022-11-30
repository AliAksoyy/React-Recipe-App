
import {ThemeProvider} from "styled-components"
import {BrowserRouter} from "react-router-dom"
import {AppRouter} from "./Router/AppRouter";
import { GlobalStyles } from './Style/Global.style'


const theme= {
  colors:{
    header:"#333",
    cards:"#145",
    nav:"rgb(211,107,52)",
    about:"rgb(31, 154, 168)",
    detail:"#ae4",
    home:"#fa2",
    register:"#a02",
    login:"#fa2"
  },
  responsive:{
    xs:"576px",
    sm:"768px",
    md:"992px",
    lg:"1200px"
  },
  

}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
    
       
    
  );
}

export default App;
