import React from 'react';

function LeftNavItem(props){
    return(
        <div className="Navbar--left-items">
            {props.children}
        </div>
    );
}

export default LeftNavItem;