import * as CommentAPIUtil from '../util/comments_api_util';
import {receiveErrors, clearErrors} from './errors_action'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS';


export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
})

export const receiveAllComments = (comments) => ({
  type: GET_ALL_COMMENTS,
  comments
})

export const createComment = (comment) => dispatch => {
  return CommentAPIUtil.newComment(comment)
                       .then(comment =>dispatch(receiveComment(comment)))
                       .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const getAllComments = (projectId) => dispatch => {
  return CommentAPIUtil.getAllComments(projectId)
                       .then(comments =>dispatch(receiveAllComments(comments)))
                        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}
