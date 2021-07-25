import React from "react";
import UserPic from "../../assets/images/Mohan-muruge.jpg";
import "./CommentForm.scss";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: ''
    };
  } 

  handleOnChange = (e) => {
    this.setState({ value: e.target.value})
  }

  handleOnClick = () => {
    this.props.handleOnClick(this.state.value);
    this.setState({ value: '' });
  }
  render() {
    return (
      <div className="CommentForm">
        <img className="CommentForm--pic" src={UserPic} alt="User Pic" />
        <div>
          <div className="CommentForm__form">
            <label className="CommentForm__form--label">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="CommentForm__form--input"
              type="text"
              placeholder="Write comment here"
              value={this.state.value}
              onChange={this.handleOnChange}
            />
          </div>
          <div>
            <button
              className="CommentForm__form--button"
              onClick={this.handleOnClick}
            >
              COMMENT
            </button>
          </div>
        </div>
      </div>
    );
 }
};

export default CommentForm;
