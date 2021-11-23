import React from 'react';
import {navLinks} from '../utils/constants';
// import styled from 'styled-components';
import {Link} from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar">
            <h2>Navbar PAGE</h2>
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
        </nav>
    );
}

export default Navbar;