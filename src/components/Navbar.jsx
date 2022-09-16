import { useState } from 'react';
import './Navbar.css';
import data from '../db/data.json'

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const navLinks = data.navLinks;
    console.log("Navbar rendred.....");

    return (
        <nav className={isNavExpanded ? "NavbarContainer expanded" : "NavbarContainer"}>
            <button className="hamburger" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }}>
                <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                    <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
                </svg>
            </button>
            <ul>
                <li className='NavIcon'> <a href="#"><img src="images/apple-svgrepo-com.svg" alt="Apple icon alt text"></img> </a> </li>
                {navLinks && navLinks.map((link, index) => {
                    return (<li key={index}><a href="#">{link}</a> </li>)
                }
                )}
                <li className='NavIcon'> <a href="#"><img src="images/search-svgrepo-com.svg" alt="Apple icon alt text"></img></a> </li>
                <li className='NavIcon'> <a href="#"><img src="images/bag-svgrepo-com.svg" alt="Apple icon alt text"></img></a> </li>
            </ul>
        </nav>
    )
}

export default Navbar;