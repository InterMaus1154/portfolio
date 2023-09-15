import {FC, useContext} from 'react';
import "./styles/App.css";
import "./styles/theme.css";
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import PageComponent from './pages/PageComponent';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import {ThemeContext} from './context/ThemeContext';

const App : FC = () =>{

  const {theme} = useContext(ThemeContext);

  return(
    <div className="App-component" id={theme}>
      <Header />
      <Routes>
        <Route path="*" element={<PageComponent title={"404"}><NotFound /></PageComponent>}/>
        <Route path="/" element={<PageComponent title={"Home"}><Home /></PageComponent>}/>
      </Routes>
    </div>
  );
}

export default App;