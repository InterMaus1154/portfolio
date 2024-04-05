import {FC, MouseEventHandler, useContext} from "react";
import "../../styles/component_styles/Header.css";
import MenuLink from "../MenuLink";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {HeaderStatusContext} from "../../context/HeaderStatusContext";


const Header: FC = () => {

    const {isHeaderOpen, setHeaderOpen} = useContext(HeaderStatusContext);

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

            <button className="Close-header-button Fa-wrapper-button" aria-label={"Close menu"} onClick={closeMenu}>
                <FontAwesomeIcon icon={faX} className={"Fa-icon"}/>
            </button>

        </header>
    );
}

export default Header;

