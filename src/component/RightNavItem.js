import React from 'react';

function RightNavItem(props){
    return(
        <div className="Navbar--right-items">
            {props.children}
        </div>
    );
}

export default RightNavItem;