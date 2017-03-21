import React from 'react';
import {Link} from 'react-router-dom';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {keyword: ""};
  }

  update(event){
    event.preventDefault();
    this.setState({keyword: event.target.value})
  }

  findProjects(){
    this.props.findProjects(this.state.keyword)
    this.props.history.push("/search_results")
  }

  render(){
    return(
      <div>
        <form onSubmit={this.findProjects.bind(this)}>
          <input type="text" onChange={this.update.bind(this)} placeholder={"search..."}></input>
        </form>
      </div>

    )
  }

}
export default SearchBar;
