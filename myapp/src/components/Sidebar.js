import React, {useState} from 'react';
import {navLinks} from '../utils/constants';
import {Link} from 'react-router-dom';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { useAppContext } from '../context/app_context';

const Sidebar=() =>{
//   const [sidebar,setSidebar]=useState(false);
//   const handleToggle=()=>setSidebar(!sidebar);
const {isSidebarOpen,CloseSidebar}=useAppContext();
    return (
        
        <aside className="container">
            
           <div className={`sidebar ${isSidebarOpen ? 'show' : 'hide'}`}>
            <button className="burger" onClick={CloseSidebar}><AiOutlineCloseCircle/></button>
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
            
            
        </div>
        </aside>
    );
}

export default Sidebar;