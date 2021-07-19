import React from 'react';

import videos from './data/videos.json'
import videoDetails from './data/video-details.json'

import Header from './components/header/Header'
import MediaCard from './components/mediaCard/MediaCard'
import MainPhoto from './components/mainPhoto/MainPhoto'

import CommentForm from "./components/commentForm/CommentForm";
import CommentList from "./components/commentList/CommentList";
import MediaList from "./components/mediaList/MediaList";

class App extends React.Component {

  state = {
    current: videoDetails[0],
    videoList: videos.filter(item => item.id !== videoDetails[0].id),
  };

  handleClick = (event) => {
    const newVideo = videoDetails.filter(item => item.id === event.id)[0];
    this.setState({ current: newVideo });

    const newVideoList = videos.filter(item => item.id !== event.id);
    this.setState({ videoList: newVideoList });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MainPhoto video={this.state.current} />
        <div className="container">
          <div className="current-video">
            <MediaCard video={this.state.current} />

            <h2 className="comments-quantity">{this.state.current.comments.length} Comments</h2>
            <CommentForm />

            {this.state.current.comments.map(comment => (
              <CommentList key={comment.id} data={comment} />
            ))}

          </div>
          <div className="suggestions">
            <h5 className="suggestions--title">NEXT VIDEO</h5>
            <MediaList data={this.state.videoList} click={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
