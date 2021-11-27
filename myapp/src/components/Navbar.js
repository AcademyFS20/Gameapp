import React from 'react';
import {navLinks} from '../utils/constants';
// import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useAppContext} from '../context/app_context';
import {CgMenuRight} from 'react-icons/cg';
import charactersano from '../assets/charactersano.png';


function Navbar() {
    const {OpenSidebar} = useAppContext();
    return (
        <header className="whole">
        <nav className="navbar">
            <h2 className="titlesite">Heonja Play</h2>
            <ul className="navlist">
                {
                    navLinks.map((item)=>{
                        return(<div className='border'><li className="linkat" key={item.id}>
                            <Link to= {item.url} className="links">
                                {item.text}
                            </Link>
                            </li> </div>)
                    })
                }
            </ul>
            <button className="burger" onClick={OpenSidebar}><CgMenuRight id="menu"/></button>
        </nav>
        <div className="navsecond">
        <div className="discovermore">
            <h3 className="discover">Discover More</h3>
            <p id='para'>We released a new character, check it out!</p>
            <button className='btn_discover'>Discover</button>
        </div>
        <img src={charactersano} alt="character" id="nanatsu"/>
        </div>
        
        </header>
    );
}

export default Navbar;