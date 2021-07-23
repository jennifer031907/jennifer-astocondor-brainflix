import React from 'react';
import './MediaCard.scss';
import viewIcon from '../../assets/icons/Icon-views.svg';
import likesIcon from '../../assets/icons/Icon-likes.svg';

const MediaCard = (props) => {

    const { id, title, channel, views, likes, description } = props.video;

    return (
        <div className="current-video--description" key={id}>
            <h1 className="current-video--name">{title}</h1>
            <div className="current-video__titles">
                <div className="current-video__info">
                    <h2 className="current-video__info--author">By {channel}</h2>
                    <h5 className="current-video__info--date">12/18/2018</h5>
                </div>
                <div className="current-video__social-info">
                    <div className="current-video__social-info--views">
                        <img src={viewIcon} alt="Views Icon" />
                        <div className="current-video__social-info--icon">{views}</div>
                    </div>
                    <div className="current-video__social-info--likes">
                        <img src={likesIcon} alt="Likes Icon" />
                        <div className="current-video__social-info--icon">{likes}</div>
                    </div>
                </div>
            </div>
            <p className="current-video--text">{description}</p>
        </div>
    );
};

export default MediaCard;