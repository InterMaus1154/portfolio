import {FC, useContext} from 'react';
import './App.css';
import "./styles/_font.css";


import {ThemeContext} from "./context/ThemeContext";
import Header from "./components/root_components/Header";
import Footer from './components/root_components/Footer';
import RoutesComponent from "./components/root_components/RoutesComponent";


const App: FC = () => {

    // color theme light | dark
    const {theme} = useContext(ThemeContext);


    return (

        <div className="App lato-regular" id={theme}>
            <Header></Header>
            <main>
                <RoutesComponent />
            </main>
            <Footer></Footer>
        </div>
    );
};
export default App;
