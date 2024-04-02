import {FC, FormEventHandler, MouseEventHandler, useContext, useState} from "react";
import "../../styles/component_styles/Header.css";
import MenuLink from "../MenuLink";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-regular-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {ThemeContext} from "../../context/ThemeContext";
import {NavLink} from "react-router-dom";

const Header: FC = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    const changeColorTheme: FormEventHandler<HTMLButtonElement> = (): void => {
        setTheme(prevState => prevState === "light" ? "dark" : "light");
    };

    const [isNavActive, setNavActive] = useState<boolean>(false);

    const toggleMenu: MouseEventHandler<HTMLButtonElement> = (): void => {
        setNavActive(!isNavActive);
    };


    return (
        <header>
            <div className="Logo-section">
                <h1>
                    <NavLink title={"Homepage"} aria-label={"Homepage"} to={"/"}>Mark Kiss Portfolio</NavLink>
                </h1>
            </div>
            <button className="Hamburger-menu" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} className={"Header--fa-icon"}/>
            </button>
            <nav className={isNavActive ? "Nav--active" : ""}>
                <ul>
                    <li><MenuLink to={"/"}>Home</MenuLink></li>
                    <li><MenuLink to={"/about"}>About</MenuLink></li>
                    <li><MenuLink to={"/projects"}>Projects</MenuLink></li>
                </ul>
            </nav>
            <div className="Theme-switcher">
                <button title={"Change colour theme"} aria-label={"Change colour theme"} onClick={changeColorTheme}>
                    <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} className={"Header--fa-icon"}/>
                </button>
            </div>
        </header>
    );
}

export default Header;

