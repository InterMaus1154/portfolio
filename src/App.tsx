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

function SVGBackgroundElement(){
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ WebkitTransition: "0.3s", transition: "0.3s" }}
      version="1.1"
      viewBox="0 0 1440 190"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop offset="0%" stopColor="orange"></stop>
          <stop offset="100%" stopColor="red"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient-0)"
        className="path-1"
        d="M0 133l21.8-19C43.6 95 87 57 131 41.2c43.5-16.2 87-9.2 131 9.5 43.5 19.3 87 50.3 131 57C436.4 114 480 95 524 95c43.3 0 87 19 131 22.2 43.2 2.8 87-9.2 130-12.7 44.1-3.5 88 3.5 131-9.5 44-13 88-44 131-44.3 43.9.3 88 31.3 131 50.6 43.8 18.7 87 25.7 131 34.9 43.7 9.8 87 21.8 131 12.6 43.6-9.8 87-40.8 131-50.6 43.5-9.2 87 2.8 131 6.3 43.5 3.5 87-3.5 131-12.7 43.4-9.8 87-21.8 131-15.8 43.3 6 87 32 131 25.3 43.2-6.3 87-44.3 130-41.1 44.1 2.8 88 47.8 131 66.5 44 19.3 88 12.3 131 6.3 43.9-6 88-13 131-6.3 43.8 6.3 87 25.3 131 31.6 43.7 6.7 87-.3 131 0 43.6-.3 87 6.7 131-3.1 43.5-9.2 87-35.2 109-47.5l21.8-12.7v95H0z"
      ></path>
      <defs>
        <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
          <stop offset="0%" stopColor="rgba(243, 106, 62, 1)"></stop>
          <stop offset="100%" stopColor="rgba(255, 179, 11, 1)"></stop>
        </linearGradient>
      </defs>
      <path
        className="path-2"
        fill="url(#sw-gradient-1)"
        d="M0 38l21.8-3.2C43.6 32 87 25 131 44.3c43.5 18.7 87 63.7 131 85.5 43.5 22.2 87 22.2 131 12.7 43.4-9.5 87-28.5 131-34.8 43.3-6.7 87 .3 131-12.7 43.2-13 87-44 130-47.5 44.1-3.5 88 22.5 131 19 44-3.5 88-34.5 131-34.8 43.9.3 88 31.3 131 44.3 43.8 13 87 6 131 15.8 43.7 9.2 87 35.2 131 44.4 43.6 9.8 87 2.8 131-12.7 43.5-15.5 87-41.5 131-50.7 43.5-9.8 87-2.8 131 9.5 43.4 12.7 87 31.7 131 31.7 43.3 0 87-19 131-31.7 43.2-12.3 87-19.3 130-9.5 44.1 9.2 88 35.2 131 47.5 44 12.7 88 12.7 131-9.5 43.9-21.8 88-66.8 131-85.5 43.8-19.3 87-12.3 131 6.4 43.7 19.3 87 50.3 131 50.6 43.6-.3 87-31.3 131-50.6C3054.5 13 3098 6 3120 3.2l21.8-3.2v190H0z" 
        opacity="0.9"
        transform="translate(0 50)"
      ></path>
      <defs>
        <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
          <stop offset="0%" stopColor="rgba(243, 106, 62, 1)"></stop>
          <stop offset="100%" stopColor="rgba(255, 179, 11, 1)"></stop>
        </linearGradient>
      </defs>
      <path
        className="path-3"
        fill="url(#sw-gradient-2)"
        d="M0 38l21.8 9.5C43.6 57 87 76 131 85.5c43.5 9.5 87 9.5 131 15.8 43.5 6.7 87 18.7 131 19 43.4-.3 87-12.3 131-31.6C567.3 70 611 44 655 41.2 698.2 38 742 57 785 76c44.1 19 88 38 131 25.3 44-12.3 88-57.3 131-60.1 43.9-3.2 88 34.8 131 47.5 43.8 12.3 87 .3 131-3.2 43.7-3.5 87 3.5 131 9.5 43.6 6 87 13 131-3.2 43.5-15.8 87-53.8 131-66.5 43.5-12.3 87-.3 131 25.4 43.4 25.3 87 63.3 131 66.5 43.3 2.8 87-28.2 131-28.5 43.2.3 87 31.3 130 31.6 44.1-.3 88-31.3 131-38 44-6.3 88 12.7 131 3.2 43.9-9.5 88-47.5 131-47.5 43.8 0 87 38 131 53.8 43.7 16.2 87 9.2 131 3.2 43.6-6 87-13 131-25.3 43.5-12.7 87-31.7 109-41.2l21.8-9.5v171H0z"
        opacity="0.8"
        transform="translate(0 100)"
      ></path>
      <defs>
        <linearGradient id="sw-gradient-3" x1="0" x2="0" y1="1" y2="0">
          <stop offset="0%" stopColor="rgba(243, 106, 62, 1)"></stop>
          <stop offset="100%" stopColor="rgba(255, 179, 11, 1)"></stop>
        </linearGradient>
      </defs>
      <path
        className="path-4"
        fill="url(#sw-gradient-3)"
        d="M0 19l21.8-3.2C43.6 13 87 6 131 28.5 174.5 51 218 101 262 114c43.5 13 87-13 131-34.8C436.4 57 480 38 524 25.3 567.3 13 611 6 655 31.7 698.2 57 742 114 785 136.2c44.1 21.8 88 9.8 131 0 44-9.2 88-16.2 131-15.9 43.9-.3 88 6.7 131 3.2 43.8-3.5 87-15.5 131-22.2 43.7-6.3 87-6.3 131 3.2 43.6 9.5 87 28.5 131 34.8 43.5 6.7 87-.3 131-3.1 43.5-3.2 87-3.2 131 0 43.4 2.8 87 9.8 131 3.1 43.3-6.3 87-25.3 131-31.6 43.2-6.7 87 .3 130-6.4 44.1-6.3 88-25.3 131-31.6 44-6.7 88 .3 131-9.5 43.9-9.2 88-35.2 131-38 43.8-3.2 87 15.8 131 22.1 43.7 6.7 87-.3 131 6.4 43.6 6.3 87 25.3 131 22.1 43.5-2.8 87-28.8 109-41.1l21.8-12.7v171H0z"
        opacity="0.7"
        transform="translate(0 150)"
      ></path>
    </svg>
  );
}

const App : FC = () =>{

  const {theme} = useContext(ThemeContext);

  return(
    <div className="App-component" id={theme}>
      <Header />
      <PageRoutes />
      <div className="bottom">
        <SVGBackgroundElement />   
      </div>
    </div>
  );
}

export default App;