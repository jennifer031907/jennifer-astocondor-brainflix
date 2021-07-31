import React from 'react';

import PageHeader from '../components/pageHeader/PageHeader'
import VideoUpload from '../components/videoUpload/VideoUpload'

class VideoUploadPage extends React.Component {

  render() {

    return (
      <>
        <PageHeader />
        <VideoUpload />
      </>
    );
  }
}

export default VideoUploadPage;
