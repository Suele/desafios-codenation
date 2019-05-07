import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import commentsService from "../services/commentsService";
import loginService from "../services/loginService";
import { Link, matchPath, withRouter } from "react-router-dom";
import { slugify } from "../helpers";

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
    const recipeSlug = slugify(match.params.recipeSlug);

    const teste = commentsService.insert(recipeSlug, comments);
    console.log("teste", teste);
  };

  deleteComment = e => {
    const { match } = this.props;
    const recipeSlug = slugify(match.params.recipeSlug);

    const testeDeDeletar = delete (recipeSlug, e.target.value);
    console.log(testeDeDeletar);
  };

  renderComment = () => {
    const { match } = this.props;
    const recipeSlug = slugify(match.params.recipeSlug);

    return commentsService.get(recipeSlug).map(commentUser => {
      return (
        <div className='Comment media text-muted pt-3' key={commentUser.author}>
          <FontAwesomeIcon className='mr-2' size='3x' icon='user-circle' />
          <p
            className='media-body pb-3 mb-0 small lh-125 border-bottom border-gray'
            key={commentUser.author}
          >
            <strong className='d-block text-gray-dark'>
              {commentUser.author}
              {commentUser.date}
            </strong>
            {commentUser[0]}
          </p>
          {/* Icone deve aparecer somente quando o comentario for do usuario logado */}
          {commentUser.author === loginService.getUser().username && (
            <FontAwesomeIcon icon='trash' onClick={this.deleteComment} />
          )}
        </div>
      );
    });
  };

  render() {
    const { disabledComment } = this.state;
    const { pathname } = this.props.location;

    const match = matchPath(pathname, {
      path: "/recipe/:recipeSlug",
      exact: true,
      strict: false
    });
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
          <Link to={pathname}>
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
        {console.log(this.state)}
        {console.log(match)}
        {console.log(match.params)}
      </div>
    );
  }
}

export default withRouter(CommentsBlock);
