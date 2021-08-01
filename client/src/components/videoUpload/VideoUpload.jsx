import React from "react";
import "./videoUpload.scss";
import preview from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
import videoImage from "../../assets/images/Upload-video-preview.jpg";
import { v4 as uuidv4 } from "uuid";

import { uploadVideo } from "../../api/videoAPI";

class VideoUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      formUploadVideo: {
        id: uuidv4(),
        image: videoImage,
        title: "",
        description: "",
        channel: "Red Cow",
        views: 0,
        likes: 0,
        duration: "4:01",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: new Date().getTime(),
        comments: [],
      },
    };
  }

  handleTitleChange = (event) => {
    const newForm = this.state.formUploadVideo;
    newForm.title = event.target.value;
    this.setState({ formUploadVideo: newForm });
  };

  handleDescriptionChange = (event) => {
    const newForm = this.state.formUploadVideo;
    newForm.description = event.target.value;
    this.setState({ formUploadVideo: newForm });
  };
  generateImage(id) {
    return `http://localhost:4000/image${id}.jpeg`;
  }
  handleOnClick = () => {
    alert("video loaded!");
    const id = parseInt(Math.random() * 8);
    const image = this.generateImage(id);
    const newForm = this.state.formUploadVideo;
    newForm.image = image;
    this.setState({ formUploadVideo: newForm });
    uploadVideo(this.state.formUploadVideo);
  };
  render() {
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
              onChange={(e) => this.handleTitleChange(e)}
            />

            <span>ADD A VIDEO DESCRIPTION</span>
            <textarea
              className="uploadVideo__container2__form__input2"
              type="text"
              placeholder="Add a description of your video"
              onChange={(e) => this.handleDescriptionChange(e)}
            />
          </div>
        </div>
        <div className="uploadVideo__buttons">
          <Link onClick={this.handleOnClick}>
            <button className="uploadVideo__buttons__publish blueButton">
              PUBLISH
            </button>
          </Link>
          <button className="uploadVideo__buttons__cancel">CANCEL</button>
        </div>
      </div>
    );
  }
}

export default VideoUpload;
