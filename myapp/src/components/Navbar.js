import React from 'react';
import {navLinks} from '../utils/constants';
// import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useAppContext} from '../context/app_context';
import {CgMenuRight} from 'react-icons/cg';
import File03 from '../assets/File03.png';
function Navbar() {
    const {OpenSidebar} = useAppContext();
    return (
        <header>
        <nav className="navbar">
            <h2 className="titlesite">Heonja Play</h2>
            <ul className="navlist">
                {
                    navLinks.map((item)=>{
                        return(<li key={item.id}>
                            <Link to= {item.url} className="links">
                                {item.text}
                            </Link>
                            </li>)
                    })
                }
            </ul>
            <button className="burger" onClick={OpenSidebar}><CgMenuRight/></button>
        </nav>
        <div className="navsecond">
        <div className="discover">
            <h3 className="discover">Discover More</h3>
            <p id='para'>We released a new character, check it out!</p>
            <button className='btn_discover'>Discover</button>
        </div>
        <img src={File03} alt="character" id="nanatsu"/>
        </div>
        </header>
    );
}

export default Navbar;