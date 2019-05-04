import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import commentsService from "../services/commentsService";
import loginService from "../services/loginService";

class CommentsBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      disabledComment: true
    };
  }

  componentWillMount() {
    this.setState({ disabledComment: !loginService.isLogged() });
  }

  addComment = () => {
    const { comments } = this.state;
  };

  renderComment = () => (
    <div className='Comment media text-muted pt-3'>
      <FontAwesomeIcon className='mr-2' size='3x' icon='user-circle' />
      <p className='media-body pb-3 mb-0 small lh-125 border-bottom border-gray'>
        <strong className='d-block text-gray-dark'>@user</strong>
        Comment
      </p>
      {/* Icone deve aparecer somente quando o comentario for do usuario logado */}
      {console.log(commentsService.get())}
      {console.log(loginService.isLogged())}
      <FontAwesomeIcon icon='trash' />
    </div>
  );

  render() {
    const { disabledComment } = this.state;
    return (
      <div className='text-left'>
        <div className='my-3 p-3 bg-white rounded shadow-sm'>
          <h6 className='border-bottom border-gray pb-2 mb-0'>Comments</h6>
          {this.renderComment()}
          {this.renderComment()}
          {this.renderComment()}
        </div>
        <form>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Comment</label>
            <textarea
              disabled={disabledComment}
              value={this.onChange}
              onChange={e => {
                e.preventDefault();
                this.setState({ comments: e.target.value });
              }}
              required='required'
              className='form-control'
              id='exampleInputEmail1'
              placeholder='Insert your comment here'
            />
          </div>
          <button
            onClick={this.addComment}
            disabled={disabledComment}
            type='submit'
            className='btn btn-primary'
          >
            Submit
          </button>
        </form>
        {console.log(this.state)}
      </div>
    );
  }
}

export default CommentsBlock;
