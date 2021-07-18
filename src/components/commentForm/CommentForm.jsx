import React from 'react';
import UserPic from '../../assets/images/Mohan-muruge.jpg'
import './CommentForm.scss'
const CommentForm = () => {
  return (
    <div className="CommentForm">
      <img className="CommentForm--pic" src={UserPic} alt="User Pic"/>
      <div className="CommentForm__form">
        <label className="CommentForm__form--label">JOIN THE CONVERSATION</label>
        <textarea className="CommentForm__form--input" type="text" placeholder="Write comment here" />
      <button className="CommentForm__form--button" onClick={() => { }}>COMMENT</button>
      </div>
    </div>
  )
}

export default CommentForm;
