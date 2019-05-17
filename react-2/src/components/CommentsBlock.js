import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import commentsService from "../services/commentsService";
import loginService from "../services/loginService";
import { Link } from "react-router-dom";

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
    const { match } = this.props;
    const recipeSlug = match;

    const teste = commentsService.insert(recipeSlug, comments);
    console.log("teste", teste);
  };

  deleteComment = index => {
    const { match } = this.props;
    const { comments } = this.state;
    const recipeSlug = match;

    const newComments = comments.filter(comment => {
      return comment !== index;
    });

    this.setState({ comments: [...newComments] });
    console.log(newComments);
    console.log(comments);

    const testeDeDeletar = commentsService.delete(recipeSlug, newComments);
    console.log(testeDeDeletar);
    console.log("index:", index);
  };

  renderComment = () => {
    const { match } = this.props;
    const recipeSlug = match;

    return commentsService.get(recipeSlug).map(commentUser => {
      return (
        <div className='Comment media text-muted pt-3' key={commentUser.date}>
          <FontAwesomeIcon className='mr-2' size='3x' icon='user-circle' />
          <p className='media-body pb-3 mb-0 small lh-125 border-bottom border-gray'>
            <strong className='d-block text-gray-dark'>
              {commentUser.author}
              {commentUser.date}
            </strong>
            {commentUser[0]}
          </p>
          {/* Icone deve aparecer somente quando o comentario for do usuario logado */}
          {commentUser.author === loginService.getUser().username && (
            <Link to={"/"}>
              <FontAwesomeIcon
                icon='trash'
                onClick={() => commentsService.delete(recipeSlug, commentUser)}
              />
            </Link>
          )}
        </div>
      );
    });
  };

  render() {
    const { disabledComment } = this.state;
    const { match } = this.props;
    return (
      <div className='text-left'>
        <div className='my-3 p-3 bg-white rounded shadow-sm'>
          <h6 className='border-bottom border-gray pb-2 mb-0'>Comments</h6>
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
                this.setState({ comments: [].concat(e.target.value) });
              }}
              required='required'
              className='form-control'
              id='exampleInputEmail1'
              placeholder='Insert your comment here'
            />
          </div>
          <Link to={"/"}>
            <button
              onClick={this.addComment}
              disabled={disabledComment}
              type='submit'
              className='btn btn-primary'
            >
              Submit
            </button>
          </Link>
        </form>
        {console.log("match", match)}
      </div>
    );
  }
}

export default CommentsBlock;
