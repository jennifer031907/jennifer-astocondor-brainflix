import React from 'react';
import './MediaList.scss'
const MediaList = (props) => {
    return (
        props.data && props.data.map(video => (
            <article className="suggestions__article" key={video.id} onClick={() => props.click(video)}>
                <img className="suggestions--video" src={video.image} alt="" style={{ width: '60px', height: '50px' }} />
                <div className="suggestions__info">
                    <h3 className="suggestions--name" >{video.title}</h3>
                    <h4 className="suggestions--author" >{video.channel}</h4>
                </div>
            </article>
        ))
    );
};
export default MediaList;