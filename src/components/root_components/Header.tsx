import {FC, FormEventHandler, MouseEventHandler, useContext, useState} from "react";
import "../../styles/component_styles/Header.css";
import MenuLink from "../MenuLink";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-regular-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faX, faPaintRoller} from "@fortawesome/free-solid-svg-icons";
import {ThemeContext} from "../../context/ThemeContext";
import {NavLink} from "react-router-dom";
import {HeaderStatusContext} from "../../context/HeaderStatusContext";
import {ThemeModal as TM} from "../modals/ThemeModal";

import {useModal} from "../modals/ModalTemplate";

const Header: FC = () => {

    const {setTheme} = useContext(ThemeContext);
    const {isHeaderOpen, setHeaderOpen} = useContext(HeaderStatusContext);

    const [isModalOpen, setModalOpen, ThemeModal] = useModal({
        fragment: <TM />
    });

    const changeColorTheme: FormEventHandler<HTMLButtonElement> = (): void => {
        // setTheme(prevState => prevState === "light" ? "dark" : "light");
        setModalOpen(true);
    };

    const closeMenu: MouseEventHandler<HTMLButtonElement> = (): void => {
        setHeaderOpen(prev => false);
    };

    return (
        <header className={isHeaderOpen ? "Header-active" : ""}>
            <div className="Logo-section">
                <h1>
                    <NavLink title={"Homepage"} aria-label={"Homepage"} to={"/"}>Mark Kiss Portfolio</NavLink>
                </h1>
            </div>
            <nav>
                <ul>
                    <li><MenuLink to={"/"}>&#60;home&#62;</MenuLink></li>
                    <li><MenuLink to={"/about"}>&#60;about&#62;</MenuLink></li>
                    <li><MenuLink to={"/projects"}>&#60;projects&#62;</MenuLink></li>
                </ul>
            </nav>
            <div className="Theme-switcher">
                <button title={"Change colour theme"} aria-label={"Change colour theme"} onClick={changeColorTheme} className={"Fa-wrapper-button"}>
                    <FontAwesomeIcon icon={faPaintRoller} className={"Fa-icon"}/>
                </button>
            </div>
            <button className="Close-header-button Fa-wrapper-button" aria-label={"Close menu"} onClick={closeMenu}>
                <FontAwesomeIcon icon={faX} className={"Fa-icon"}/>
            </button>
            <ThemeModal />
        </header>
    );
}

export default Header;

