import {FC, MouseEventHandler, useContext, useEffect} from 'react';
import './App.css';
import "./styles/_font.css";


import {ThemeContext} from "./context/ThemeContext";
import {HeaderStatusContext} from "./context/HeaderStatusContext";
import Header from "./components/root_components/Header";
import Footer from './components/root_components/Footer';
import RoutesComponent from "./components/root_components/RoutesComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const App: FC = () => {

    // color theme light | dark
    const {theme} = useContext(ThemeContext);

    const {setHeaderOpen} = useContext(HeaderStatusContext);

    useEffect(()=>{
        document.body.id = theme;
    }, [theme]);

    const openMenu : MouseEventHandler<HTMLButtonElement> = () : void =>{
        setHeaderOpen(prev => true);
    };

    return (

        <div className="App lato-regular">
            <Header></Header>
            <main>
                {/*Menu icon to appear on every page*/}
                <button className={"Open-header-button Fa-wrapper-button"} aria-label={"Open menu"} onClick={openMenu}>
                    <FontAwesomeIcon icon={faBars} className={"Fa-icon"}/>
                </button>
                <RoutesComponent />
            </main>
            <Footer></Footer>
        </div>
    );
};
export default App;
