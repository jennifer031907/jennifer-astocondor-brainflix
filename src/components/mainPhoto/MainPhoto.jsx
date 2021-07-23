import React from 'react';
import './MainPhoto.scss'

const MainPhoto = (props) => {

    const { id, image, duration } = props.video;

    return (
        <div className="MainPhoto" key={id}>
            <img className="MainPhoto--video" src={image} alt="current video" />
            <div className="MainPhoto--timer">0:00/{duration}</div>
        </div>
    );
};

export default MainPhoto;