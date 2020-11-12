import React from 'react';

function SocialCard(props){
    return(
        <div className="Aside--social-cards">
            <h3 className="Aside--social-cards--title">Social Medias</h3>
        
            <div className="Aside--social-cards--social-wrapper">
                <img alt="0"src="https://via.placeholder.com/64?text=Twitter"/>
                <img alt="0"src="https://via.placeholder.com/64?text=Facebook"/>
                <img alt="0"src="https://via.placeholder.com/64?text=Instagram"/>
                <img alt="0"src="https://via.placeholder.com/64?text=Youtube"/>
            </div>

        </div>
    );
}

export default SocialCard;