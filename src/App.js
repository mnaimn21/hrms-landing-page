
import React, {Suspense, lazy} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import AOS from 'aos';
import 'aos/dist/aos.css'
import theme from "./theme"
import LoadingFallBack from "./components/dumb/LoadingFallBack";

import Header from "./components/smart/Header";
import Contact from "./components/smart/Contact";
import Footer from "./components/dumb/Footer";

import AskForDemoContextProvider from "./context/AskForDemoContext";

const Home = lazy(() => import('./pages/home/view/Home'));

function App() {

  AOS.init()

  return (
    <Suspense fallback={<LoadingFallBack/>}>
      <AskForDemoContextProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Contact/>
            <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
          </Router>
        </ThemeProvider>
      </AskForDemoContextProvider>
    </Suspense>

  );
}

export default App;
