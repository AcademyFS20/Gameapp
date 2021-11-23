import React, {useState} from 'react';
import {navLinks} from '../utils/constants';
import {Link} from 'react-router-dom';
import {CgMenuRight} from 'react-icons/cg';
function Sidebar() {
  const [sidebar,setSidebar]=useState(false);
  const handleToggle=()=>setSidebar(!sidebar);
    return (
        
        <div className="container">
            <button className="burger" onClick={handleToggle}><CgMenuRight/></button>
            {sidebar && <div className="sidebar">
            <ul >
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
            
            
        </div>}
        </div>
    );
}

export default Sidebar;