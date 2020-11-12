import React from 'react';

function Reviews(props){
    return(
        <section className="Review" style={props.stle}>
            <h3 className="Review--title">Featured Reviews</h3>
            {props.children}
        </section>
    );
}

export default Reviews;