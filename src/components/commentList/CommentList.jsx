import React from 'react';
import './CommentList.scss'

const CommentList = (props) => {
  return (
    <div className="comment" style={{ borderBottom: '1px solid #cecece' }}>
      <div className="comment--pic" style={{ backgroundColor: '#cecece', width: '50px', height: '50px', borderRadius: '50%' }}></div>
      <div class="comment--info">
        <div className="comment--firtsLine">
          <div className="comment--name">{props.data.name}</div>
          <div className="comment--date">{props.data.timestamp}</div>
        </div>
        <div className="comment--text">{props.data.comment}</div>
      </div>
    </div>
  )
}

export default CommentList;
