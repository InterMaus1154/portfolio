import {FC, MouseEventHandler, useContext, useEffect} from 'react';
import './App.css';
import "./styles/_font.css";


import {ThemeContext} from "./context/ThemeContext";
import {HeaderStatusContext} from "./context/HeaderStatusContext";
import Header from "./components/root_components/Header";
import Footer from './components/root_components/Footer';
import RoutesComponent from "./components/root_components/RoutesComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faPaintRoller} from "@fortawesome/free-solid-svg-icons";
import {useModal} from "./components/modals/ModalTemplate";
import {ThemeModal as TM} from "./components/modals/ThemeModal";


const App: FC = () => {

    // color theme light | dark
    const {theme} = useContext(ThemeContext);

    const {setHeaderOpen} = useContext(HeaderStatusContext);

    useEffect(() => {
        document.body.id = theme;
    }, [theme]);

    const openMenu: MouseEventHandler<HTMLButtonElement> = (): void => {
        setHeaderOpen(prev => true);
    };

    const [isModalOpen, setModalOpen, ThemeModal] = useModal({
        fragment: <TM/>
    });

    return (

        <div className="App lato-regular">
            <Header></Header>
            <main>
                {/*Menu icon to appear on every page*/}
                <button className={"Open-header-button Fa-wrapper-button"} title={"Open menu"} aria-label={"Open menu"}
                        onClick={openMenu}>
                    <FontAwesomeIcon icon={faBars} className={"Fa-icon"}/>
                </button>
                {/*Theme switcher button to appear on every page*/}
                <button title={"Change colour theme"} aria-label={"Change colour theme"}
                        className={"Fa-wrapper-button Theme-switcher"} onClick={() => setModalOpen(true)}>
                    <FontAwesomeIcon icon={faPaintRoller} className={"Fa-icon"}/>
                </button>
                <RoutesComponent/>
            </main>
            <Footer></Footer>
            <ThemeModal/>
        </div>
    );
};
export default App;
