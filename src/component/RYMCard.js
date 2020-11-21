import React from 'react';

function RYMCard(props){
    return(
        <div className="RYMCard">
            <div className="RYMCard--left-img">
                <img alt="" src={props.img}/>
            </div>
            <div className="RYMCard--right-element">
                <h1>Welcome to Rate Your Music</h1>
                <h2>
                    RYM is one of the largest music databases online, which you 
                    can use to discover hot music. 
                </h2>
                <div className="RYMCard--right-element--button">
                    <img alt="" src={props.arrow}></img>
                    <a href="/#">Log In</a>
                </div>
            </div>
        </div>
    );
}

export default RYMCard;