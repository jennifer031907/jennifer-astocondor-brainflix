import React from "react";
import "./MediaList.scss";
import { Link } from "react-router-dom";

const MediaList = (props) => {
  const { data } = props;

  return (
    data &&
    data.map((video) => {
      const { id, image, title, channel } = video;
      return (
        <Link className="suggestions__article" key={id} to={`/video/${id}`}>
          <img
            className="suggestions--video"
            src={image}
            alt="Video suggest"
            style={{ width: "60px", height: "50px" }}
          />
          <div className="suggestions__info">
            <h3 className="suggestions--name">{title}</h3>
            <h4 className="suggestions--author">{channel}</h4>
          </div>
        </Link>
      );
    })
  );
};
export default MediaList;
