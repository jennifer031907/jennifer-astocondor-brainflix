import React from 'react';
import './CommentList.scss'

const CommentList = (props) => {
  return (
    <div className="comment">
      <div className="comment--pic"></div>
      <div class="comment--info">
        <div className="comment--firstLine">
          <h3 className="comment--name">{props.data.name}</h3>
          <h5 className="comment--date">{props.data.timestamp}</h5>
        </div>
        <p className="comment--text">{props.data.comment}</p>
      </div>
    </div>
  )
}

export default CommentList;
