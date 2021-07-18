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
    videoList: videos,
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
        <div className="Container" style={{ display: 'flex' }}>
          <div style={{ width: '60%' }}>
            <MediaCard video={this.state.current} />

            <div>{this.state.current.comments.length} Comments</div>
            <CommentForm />
            <hr style={{ backgroundColor: 'gray', width: '100%' }} />

            {this.state.current.comments.map(comment => (
              <CommentList key={comment.id} data={comment} />
            ))}

          </div>
          <div className="suggestions" style={{ width: '40%' }}>
            <div className="suggestions--title">NEXT VIDEO</div>
            <MediaList data={this.state.videoList} click={this.handleClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
