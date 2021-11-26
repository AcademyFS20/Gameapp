import React, {useState} from 'react';
import {navLinks} from '../utils/constants';
import {Link} from 'react-router-dom';
import {MdClose} from 'react-icons/md';
import { useAppContext } from '../context/app_context';

const Sidebar=() =>{
//   const [sidebar,setSidebar]=useState(false);
//   const handleToggle=()=>setSidebar(!sidebar);
const {isSidebarOpen,CloseSidebar}=useAppContext();
    return (
        
        <aside className="container">
            
           <div className={`sidebar ${isSidebarOpen ? 'show' : 'hide'}`}>
            <button className="burger" onClick={CloseSidebar}><MdClose id='croix'/></button>
            <ul className="listlinks">
            {
                    navLinks.map((item)=>{
                        return(<div className='border'><li key={item.id} id='li'>
                            <Link to= {item.url} className="links">
                                {item.text}
                            </Link>
                            </li> </div>)
                    })
                }
                
                


            </ul>
            
            
        </div>
        </aside>
    );
}

export default Sidebar;