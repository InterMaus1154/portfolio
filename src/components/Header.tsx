import {FC, useRef} from 'react';
import "../styles/header.css";
import NavListItem from './NavListItem';
import {Link} from 'react-router-dom';
import ThemeSelector from './ThemeSelector';

const Header : FC = () =>{

    const navRef = useRef(document.createElement("nav"));

    const handleMenuClick = () : void =>{
        navRef.current.classList.toggle("Nav-visible");
    }

    return(
        <header>
            <h1 className="Header-title"><Link to="/">Mark Kiss Portfolio</Link>
                <button title="Open or close menu" className="Hamburger-icon" onClick={handleMenuClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </h1>
            
            <nav ref={navRef}>
                    <NavListItem to="/">Home</NavListItem>
                    <NavListItem to="/about">About</NavListItem>
                    <NavListItem to="/projects">Projects</NavListItem>
                    <NavListItem to="/contact">Contact</NavListItem>
                    <NavListItem to="/cv">CV</NavListItem>
                    
            </nav>
        </header>
    );
};

export default Header;

//<span className="CV-button"><Link to="/cv">CV</Link></span>