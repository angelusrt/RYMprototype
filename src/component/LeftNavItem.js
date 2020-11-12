import React from 'react';

function LeftNavItem(props){
    return(
        <div className="Navbar--left-items">
            <img className="Navbar--left-items--burguer" alt="" src={props.burguer}/>
            {props.logo}
            {props.children.map(prop => prop)}
        </div>
    );
}

export default LeftNavItem;