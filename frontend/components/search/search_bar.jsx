import React from 'react';
import {Link} from 'react-router-dom';
import {Route, Redirect} from 'react-router'

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {keyword: ""};
    this.findProjects = this.findProjects.bind(this);
  }

  update(event){
    event.preventDefault();
    this.setState({keyword: event.target.value})
  }

  findProjects(){
    if(this.state.keyword !== ""){
      this.props.findProjects(this.state.keyword)
      localStorage.setItem("searching", "true");
      this.setState({keyword: ""})
    }
  }

  render(){
    return(
      <div className="search-bar">
        {(localStorage.searching === "true") ? (<Redirect to="/search_results"/>) : <div></div>}
        <div className="lets-make">Let's Make </div>
        <form onSubmit={this.findProjects}>
          <input className="search-input" type="text" onChange={this.update.bind(this)} placeholder={"search..."} value={this.state.keyword}></input>
        </form>
      </div>

    )
  }

}
export default SearchBar;
