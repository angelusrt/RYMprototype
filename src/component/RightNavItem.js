import React from 'react';

function RightNavItem(props){
    return(
        <div className="Navbar--right-items">
            {props.children}
            {props.log}
        </div>
    );
}

export default RightNavItem;