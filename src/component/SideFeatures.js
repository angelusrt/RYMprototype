import React from 'react';

function SideFeatures(props){
    return(
        <div className="Aside--side-features">
            <div className="Aside--side-features--menu-wrapper">
                <h3 className="Aside--side-features--menu-wrapper--feature">Feature</h3>
                <h3 className="Aside--side-features--menu-wrapper--my-feature">My Feature</h3>
            </div>
            
            <div className="Aside--side-features--cards-wrapper">
                {props.children}
            </div>

        </div>
    );
}

export default SideFeatures;