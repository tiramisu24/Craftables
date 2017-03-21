import {connect} from 'react-redux';
import {findProjects} from '../../actions/search_actions';
import SearchBar from './search_bar'

const mapStateToProps =(state) => {
  return{
  projectsHash : state.projects.projects
}}


const mapDispatchToProps = (dispatch) => ({
  findProjects: (keyword) => dispatch(findProjects(keyword))
})

const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchBarContainer;
