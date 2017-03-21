import {connect} from 'react-redux';
import {findProjects} from '../../actions/search_actions';
import SearchResult from './search_result'

const mapStateToProps =(state) => {
  return{
  projectsHash : state.projects.projects
}}


const mapDispatchToProps = (dispatch) => ({
  findProjects: (keyword) => dispatch(findProjects(keyword))
})

const SearchResultContainer = connect(mapStateToProps, mapDispatchToProps)(SearchResult);

export default SearchResultContainer;
