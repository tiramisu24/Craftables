import {connect} from 'react-redux';
import {createComment, getAllComments} from '../../actions/comment_actions'
import ShowComments from './comments'

const mapStateToProps =(state, ownProps) => {
  debugger;
  return{
  projectId: ownProps.projectId,
  comments : state.comments
}}


const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  getAllComments: (projectId) => dispatch(getAllComments(projectId))
})

const ShowCommentsContainer = connect(mapStateToProps, mapDispatchToProps)(ShowComments);

export default ShowCommentsContainer;
