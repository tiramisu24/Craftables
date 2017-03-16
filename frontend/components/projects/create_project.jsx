import React from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router'
import createHistory from 'history/createBrowserHistory';


class CreateProject extends React.Component{
  constructor(props){
    super(props);
    this.state = this.initialState();
    this.showErrors = this.showErrors.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  initialState(){
    return {
      title: "",
      author_id: this.props.authorId,
      body: "",
      archived: false,
      featured: true
    }
  }

  redirect(path){
    const history = createHistory();
    history.push(path);
  }

  update(input){
    return event => this.setState({[input]: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault;
    let project = this.state;
    this.props.createProject({project})
        .then(
          project => {
            debugger;
            this.redirect(`/Project/${project.project.id}`)
          }
        );
  }

  showErrors(){
    let show_errors = <div></div>;
    if(!!this.props.errors){
      show_errors = this.props.errors.map((er,idx) => (
        <li key={idx}>{er}</li>
      ))
    }
    return show_errors
  }

  render(){
    if (localStorage.user === "") return <div></div>;

    return(
      <div className="create-project-div">
        <ul>{this.showErrors}</ul>
        <form className="create-project-form" onSubmit={this.handleSubmit}>
          <label>
            <input type="text" onChange={this.update("title")} placeholder="Title"></input>
          </label>

          <label>
            <textarea onChange={this.update("body")}></textarea>
          </label>
          <input type="submit" className="submit-button-create-project" value="Publish"></input>
        </form>
      </div>
    )
  }
}

export default CreateProject;
