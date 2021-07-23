import React from 'react';
import AppStyle from './App.scss';

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

  handleOnClick = (event) => {
    const newVideo = videoDetails.find(item => item.id === event.id);
    this.setState({ current: newVideo });

    this.state.videoList = videos.filter(item => item.id !== event.id);
  }

  render() {
    const { current, videoList } = this.state;

    return (
      <div className="App">
        <Header />
        <MainPhoto video={current} />
        <div className="container">
          <div className="current-video">
            <MediaCard video={current} />

            <h2 className="comments-quantity">{current.comments.length} Comments</h2>
            <CommentForm />

            {current.comments.map(comment => (
              <CommentList key={comment.id} data={comment} />
            ))}

          </div>
          <div className="suggestions">
            <h5 className="suggestions--title">NEXT VIDEO</h5>
            <MediaList data={videoList} click={this.handleOnClick} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
