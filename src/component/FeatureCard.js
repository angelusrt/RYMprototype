import React from 'react';

function FeatureCard(props){
    return(
        <div className="Aside--side-features--cards-wrapper--feature-card">
            <img className="Aside--side-features--cards-wrapper--feature-card--image"
            alt="" src={props.image}/>
            <div 
            className="Aside--side-features--cards-wrapper--feature-card--side"
            >
                <h2 
                className="Aside--side-features--cards-wrapper--feature-card--side--name"
                >
                    {props.songName}
                </h2>
                <h4
                className="Aside--side-features--cards-wrapper--feature-card--side--artist"
                >
                    {props.artist}
                </h4>

                <div
                className="Aside--side-features--cards-wrapper--feature-card--side--bottom"
                >
                    <h4
                    className="Aside--side-features--cards-wrapper--feature-card--side--bottom--year"
                    >
                        {props.year}
                    </h4>
                    <img 
                    className="Aside--side-features--cards-wrapper--feature-card--side--bottom--star"
                    alt="" src={props.star}
                    />
                </div>
            </div>
        </div>
    );
}

export default FeatureCard;