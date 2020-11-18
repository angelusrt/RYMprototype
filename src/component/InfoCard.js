import React from 'react';

function InfoCard(props){

    return(
        <div className="Review--card--infos">
            <h2 className="Review--card--infos--name">{ props.name }</h2>
            <h3 className="Review--card--infos--artist">{ `${props.artist} (${props.year})` }</h3>

            <h3 className="Review--card--infos--genre-title">Genre</h3>
            <h4 className="Review--card--infos--genre">{ props.genres}</h4>
            <h4 className="Review--card--infos--subgenre">{ props.subgenres}</h4>
        </div>
    );
}


export default InfoCard;