import {FC, useContext} from 'react';
import "./styles/App.css";
import "./styles/theme.css";
import Header from './components/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageComponent from './pages/PageComponent';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import {ThemeContext} from './context/ThemeContext';
import About from './pages/About';
import { AnimatePresence } from 'framer-motion';

function PageRoutes(){

  const location = useLocation();

  return(
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
        <Route path="*" element={<PageComponent title={"404"}><NotFound /></PageComponent>}/>
        <Route path="/" element={<PageComponent title={"Home"}><Home /></PageComponent>}/>
        <Route path="/about" element={<PageComponent title={"About"}><About /></PageComponent>}/>
    </Routes>
    </AnimatePresence>
  );
}

const App : FC = () =>{

  const {theme} = useContext(ThemeContext);

  return(
    <div className="App-component" id={theme}>
      <Header />
      <PageRoutes />
      <div className="bottom">
      

      </div>
    </div>
  );
}

export default App;