import React from 'react';
import './MediaList.scss'
const MediaList = (props) => {
    return (
        props.data && props.data.map(video => (
            <div class="suggestions__box" key={video.id} onClick={() => props.click(video)}>
                <img class="suggestions__box--video" src={video.image} alt="" style={{ width: '60px', height: '50px' }} />
                <div className="suggestions__box__info">
                    <div class="suggestions__box__info--name" >{video.title}</div>
                    <div class="suggestions__box__info--author" >{video.channel}</div>
                </div>
            </div>
        ))
    );
};
export default MediaList;