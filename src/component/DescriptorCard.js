import React from 'react';

function DescriptorCard(props){
    return(
        <div className="Review--card--descriptors">
            <h3 className="Review--card--descriptors--title">Descriptors</h3>
            {props.children}
        </div>
    );
}

export default DescriptorCard;