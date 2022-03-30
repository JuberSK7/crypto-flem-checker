import React from 'react';
import {
  BrowserRouter as Router
  

} from "react-router-dom";
import Aboute from './Pages/Aboute/About';
import { Navbar } from './Compopnent';
import Footer from './FooterComponent/footer'
import GlobalStyle from './GlobleStyle';
import Cheker from './Pages/Checker/Cheker'
import Home from './Pages/Home/Home';


function App() {
  return (
    <Router>
      <GlobalStyle/>
       <Navbar/>
       <Home />
       <Aboute />
       <Cheker />
       <Footer />
    </Router>
  );
}

export default App;
