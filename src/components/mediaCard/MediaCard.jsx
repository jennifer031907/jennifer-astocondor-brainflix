import React from 'react';
import './MediaCard.scss';
import viewIcon from '../../assets/icons/Icon-views.svg';
import likesIcon from '../../assets/icons/Icon-likes.svg';

const MediaCard = (props) => {

    return (
        <div className="video__description" key={props.video.id} style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="video--name">{props.video.title}</div>
            <div className="video__titles" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="video__info">
                    <div className="video__info--autor">By {props.video.channel}</div>
                    <div className="video__info--date">12/18/2018</div>
                </div>
                <div className="video__socialInfo">
                    <div className="video__views">
                        <img src={viewIcon} alt="Views Icon" />
                        <div className="video__views--icon">{props.video.views}</div>
                    </div>
                    <div className="video__likes">
                        <img src={likesIcon} alt="Likes Icon" />
                        <div className="video__likes--icon">{props.video.likes}</div>
                    </div>
                </div>
            </div>
            <div className="video--text">{props.video.description}</div>
        </div>
    );
};

export default MediaCard;