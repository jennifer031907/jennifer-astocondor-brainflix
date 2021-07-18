import React from 'react';
import './MainPhoto.scss'

const MainPhoto = (props) => {
    return (
        <div className="MainPhoto" key={props.video.id}>
            <img className="MainPhoto--video" src={props.video.image} alt="current video" />
            <div className="MainPhoto--timer">0:00/{props.video.duration}</div>
        </div>
    );
};

export default MainPhoto;