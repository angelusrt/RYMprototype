import React, {useState} from 'react';

function Navbar(props){
    const[scrollY, setScrollY] = useState(0);

    function onScroll(){
        const currentScroll = window.scrollY;
        setScrollY(currentScroll);
        console.log(scrollY);
    }
    
    return(
        <nav className="Navbar" onScroll={onScroll}>
            {props.children}
        </nav>
    );
}

export default Navbar;