import React from 'react';

function ReviewCard(props){
    return(
        <div className="Review--card">
            {props.children}
        </div>
    );
}


export default ReviewCard;