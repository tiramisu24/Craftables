import React from 'react';
import {Link} from 'react-router-dom';
import {Route, Redirect} from 'react-router'

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {keyword: null};
  }

  update(event){
    event.preventDefault();
    this.setState({keyword: event.target.value})
  }

  findProjects(){
    this.props.findProjects(this.state.keyword)
    localStorage.setItem("searching", "true");
    this.setState({keyword: null})
    // debugger;
    // this.props.history.push("/search_results")
  }

  render(){
    return(
      <div>
        {(localStorage.searching === "true") ? (<Redirect to="/search_results"/>) : <div></div>}
        <form onSubmit={this.findProjects.bind(this)}>
          <input type="text" onChange={this.update.bind(this)} placeholder={"search..."}></input>
        </form>
      </div>

    )
  }

}
export default SearchBar;
