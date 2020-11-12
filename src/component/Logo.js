import React from 'react';
import sonemic from '../images/sonemic.png'

function Logo(){
    return(
        <div className="Navbar--left-items--logo">
            <img alt="" src={sonemic}/>
            <a href="/#">RYM</a>
        </div>
    );
}

export default Logo;