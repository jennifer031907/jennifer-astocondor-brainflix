import React from "react";
import "./videoUpload.scss";
import preview from "../../assets/images/Upload-video-preview.jpg";
import { Link,useHistory } from "react-router-dom";

const VideoUpload = () => {
    let history = useHistory();

    const handleOnClick = () => {
        alert('video loaded!')
        history.push("/home");
    }
  return (
    <div className="uploadVideo">
      <div className="uploadVideo__container1">
        <h1 className="uploadVideo__container1__title">Upload Video</h1>
      </div>
      <div className="uploadVideo__container2">
        <div className="uploadVideo__container2__pic">
          <p className="uploadVideo__container2__subtitle">VIDEO THUMBNAIL</p>
          <img
            className="uploadVideo__container2__video"
            src={preview}
            alt="Video title"
          />
        </div>
        <div className="uploadVideo__container2__form">
          <span>TITLE YOUR VIDEO</span>
          <textarea
            className="uploadVideo__container2__form__input"
            type="text"
            placeholder="Add a title to your video"
          />

          <span>ADD A VIDEO DESCRIPTION</span>
          <textarea
            className="uploadVideo__container2__form__input2"
            type="text"
            placeholder="Add a description of your video"
          />
        </div>
      </div>
      <div className="uploadVideo__buttons">
        <Link onClick={handleOnClick}>
          <button className="uploadVideo__buttons__publish blueButton">
            PUBLISH
          </button>
        </Link>
        <button className="uploadVideo__buttons__cancel">CANCEL</button>
      </div>
    </div>
  );
};

export default VideoUpload;
