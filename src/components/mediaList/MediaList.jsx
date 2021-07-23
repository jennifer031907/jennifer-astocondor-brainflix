import React from 'react';
import './MediaList.scss'
const MediaList = (props) => {
    const {data, click} = props;

    return (
        data && data.map(video => {
            const {id, image, title, channel} = video;

            return (
                <article className="suggestions__article" key={id} onClick={() => click(video)}>
                    <img className="suggestions--video" src={image} alt="" style={{ width: '60px', height: '50px' }} />
                    <div className="suggestions__info">
                        <h3 className="suggestions--name" >{title}</h3>
                        <h4 className="suggestions--author" >{channel}</h4>
                    </div>
                </article>
            );
        })
    );
};
export default MediaList;

