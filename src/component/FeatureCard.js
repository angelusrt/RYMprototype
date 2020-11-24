import React from 'react';

function FeatureCard(props){
    //rating

    var imgEl = [];

    for (var i = 0; i < props.rating; i++) {
        imgEl.push(<img 
            className="Aside--side-features--cards-wrapper--feature-card--side--bottom--star"
            alt="" src={props.star}
        />);
    }

    return(
        <div key="transition-group-content" className="Aside--side-features--cards-wrapper--feature-card">
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
                    { imgEl }
                </div>
            </div>
        </div>
    );
}

export default FeatureCard;