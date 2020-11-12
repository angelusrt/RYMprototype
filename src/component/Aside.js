import React from 'react';

function Aside(props){
    return(
        <aside className="Aside">
            {props.children}
        </aside>
    );
}

export default Aside;