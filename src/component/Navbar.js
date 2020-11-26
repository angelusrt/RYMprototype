import React from 'react';

function Navbar(props){
    return(
        <nav className={props.name} >
            {props.children}
        </nav>
    );
}

export default Navbar;