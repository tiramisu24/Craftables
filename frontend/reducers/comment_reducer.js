import {RECEIVE_COMMENT, GET_ALL_COMMENTS} from '../actions/comment_actions';
import merge from 'lodash/merge';

const CommentReducer = (state={}, action) => {
  let newComments = merge({}, state);
  switch(action.type){
    case RECEIVE_COMMENT:
      newComments = merge(newComments, {[action.comment.id] :action.comment})
      return newComments;
    case GET_ALL_COMMENTS:
      newComments = merge(newComments, action.comments)
      //hacky way to fix jbuilder
      delete newComments["comment"];
      return newComments
    default:
      return newComments
  }
}

export default CommentReducer;
