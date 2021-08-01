import React from "react";
import { v4 as uuidv4 } from "uuid";
// Components
import MediaCard from "../components/mediaCard/MediaCard";
import MainPhoto from "../components/mainPhoto/MainPhoto";
import CommentForm from "../components/commentForm/CommentForm";
import CommentList from "../components/commentList/CommentList";
import MediaList from "../components/mediaList/MediaList";

// api
import * as videoAPi from "../api/videoAPI";

class HomePage extends React.Component {
    state = {
      current: null,
      videoList: [],
      filteredVideos: [],
    };

  componentDidMount() {
    const videoId = this.props.match.params.id;
    let newList = [];

    videoAPi.getVideos().then((res) => {
      if (!videoId) {
        this.getVideoById(res[0].id);
        newList = res.filter((item) => item.id !== res[0].id);
      } else {
        this.getVideoById(videoId);
        newList = res.filter((item) => item.id !== videoId);
      }

      this.setState({ videoList: newList });
      this.setState({ filteredVideos: newList });
    });
  }

  componentDidUpdate(prevProps) {
    const prevVideoId = prevProps.match.params.id;
    const videoId = this.props.match.params.id;

    if (videoId !== prevVideoId) {
      this.getVideoById(videoId);

      const newList = this.state.videoList.filter(
        (item) => item.id !== videoId
      );
      this.setState({ filteredVideos: newList });
    }
  }

  getVideoById = (id) => {
    videoAPi.getVideoById(id).then((res) => {
      this.setState({ current: res });
    });
  };

  addCommentById = (id, data) => {
    videoAPi.addCommentById(id, data).then((res) => {
      const newCurrent = this.state.current;
      newCurrent.comments = [...newCurrent.comments, res];
      this.setState({ current: newCurrent });
    });
  };

  deleteCommentById = (id) => {
    videoAPi.deleteCommentById(id).then((res) => {
      console.log("delete: ", res);
    });
  };

  handleOnClick = (value) => {
    const newComment = {
      name: "Nigel",
      comment: value,
      id: uuidv4(),
      timestamp: new Date().getTime(),
      likes: 0,
    };

    this.addCommentById(this.state.current.id, newComment);
  };

  render() {
    return (
      <>
        {this.state.current ? (
          <>
            <MainPhoto video={this.state.current} />
            <div className="container">
              <div className="currentVideo">
                <MediaCard video={this.state.current} />
                <div className="quantityComments">
                  {this.state.current.comments.length} Comments
                </div>
                <CommentForm handleOnClick={this.handleOnClick} />
                <div className="comments">
                  {this.state.current.comments.map((comment) => (
                    <CommentList key={comment.id} data={comment} />
                  ))}
                </div>
              </div>
              <div className="suggestions">
                <div className="suggestions__title">NEXT VIDEO</div>
                <MediaList data={this.state.filteredVideos} />
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  }
}

export default HomePage;
