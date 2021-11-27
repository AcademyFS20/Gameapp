import React from 'react';
import beru from "../assets/beru.png"
function Error(props) {
    return (
        <div className="error">
            <div className="errortext">
                <div className='containerror'>
                <h1 className="errortitle">Error 404</h1>
                <h2 className="oops">Oops!! Looks like the page you are looking for no longer exists, we are sorry! </h2>
                </div>
                <img src={beru} id='beru'/>
                </div>
                <div className='errorbtn'>
                <h3 className='go'>Go back to the homepage</h3>
                <button className="goback">Homepage</button>
            </div>
            
        </div>
    );
}

export default Error;