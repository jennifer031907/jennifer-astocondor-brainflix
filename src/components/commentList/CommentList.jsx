import React from 'react';
import './CommentList.scss'

const CommentList = (props) => {

  const newDate = new Date(props.data.timestamp).toLocaleDateString("en-US");

  return (
    <div className="comment">
      <div className="comment--pic"></div>
      <div className="comment--info">
        <div className="comment--firstLine">
          <h3 className="comment--name">{props.data.name}</h3>
          <h5 className="comment--date">{newDate}</h5>
        </div>
        <p className="comment--text">{props.data.comment}</p>
      </div>
    </div>
  )
}

export default CommentList;
