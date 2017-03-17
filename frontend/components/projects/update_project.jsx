import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {Redirect} from 'react-router-dom';
import merge from 'lodash/merge';
// import AddStepForm from './add_step_form';


class UpdateProject extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      projectId : this.props.projectId,
      project: this.props.projectsHash
    }

    this.showErrors = this.showErrors.bind(this);
    this.update = this.update.bind(this);
    this.updateStep = this.updateStep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showSteps= this.showSteps.bind(this);


  }
  componentWillMount(){
    if(this.state.projectId){
      this.props.showProject(this.state.projectId);
    }
  }

  componentWillReceiveProps(nextProps){
    // debugger;
    let project = nextProps.project
    this.setState({project})
  }
  redirect(path){
    this.props.history.push(path);
  }

  update(input){
    return event => {
      let project = this.state.project;
      project[input] = event.target.value
      this.setState({project})
    };
  }
  updateStep(input,step){
    return event => {
      step[input] = event.target.value;
      let newSteps = this.state.project.steps;
      let idx = newSteps.findIndex((arg) => arg === step.id)
      newSteps[idx] = step;
      this.setState({steps: newSteps})
    };
  }

  handleSubmit(event){
    event.preventDefault;
    let project = {
      id: this.state.project.id,
      title: this.state.project.title,
      body: this.state.project.body,
      author_id: this.state.project.author.id
    }
    this.props.updateProject(project);

    let steps = this.state.project.steps;
    steps.forEach( (step,idx) => {
      step["stepNum"] = idx;
      step["project_id"] = this.props.projectId;
      this.props.updateStep(step);
    })
    debugger;
    let path = `/project/${this.props.projectId}`;
    this.redirect(path);

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

  showSteps(steps){
    let stepForm  = steps.map((step,idx) => (
        <div key={step.id} className="create-project-form-inputs">
            <div className="create-project-form-text-inputs">
              <label>
                <input type="text"
                  onChange={this.updateStep("title",step)}
                  placeholder="StepTitle" value={step.title}></input>
              </label>
              <label>
                <textarea value={step.body} onChange={this.updateStep("body",step)}></textarea>
              </label>
            </div>
            <div>Future Image</div>
          </div>
      ))
      return stepForm
  }


  render(){
    let project = this.state.project;
    if (project.author && (localStorage.user == project.author.username)){
      return(
        <div className="create-project-div">
          <ul>{this.showErrors}</ul>
          <form className="create-project-form" onSubmit={this.handleSubmit}>
            <div className="create-project-form-inputs">
              <div className="create-project-form-text-inputs">
                <label>
                  <input type="text"
                         onChange={this.update("title")}
                         placeholder="Title"
                         value={project.title}></input>
                </label>

                <label>
                  <textarea onChange={this.update("body")}
                            value={project.body}></textarea>
                </label>
              </div>
              <div className>Future Image Upload</div>
            </div>
            <div className="submit-button-create-project">
              <input type="submit"  value="Publish"></input>
            </div>
            {this.showSteps(project.steps)}
          </form>

        </div>
      )

    }else {
      return <div></div>;
      }
  }
}

export default UpdateProject;
