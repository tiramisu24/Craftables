import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {Redirect} from 'react-router-dom';
import merge from 'lodash/merge';
// import AddStepForm from './add_step_form';


class CreateProject extends React.Component{
  constructor(props){
    super(props);

    this.showErrors = this.showErrors.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addStep = this.addStep.bind(this);
    this.clickAddStep = this.clickAddStep.bind(this);

    this.state = this.initialState();
  }
  initialState(){
    return {
        project : {
        title: "",
        author_id: this.props.authorId,
        body: "",
        archived: false,
        featured: true
      },
      steps :{},
      stepNum: 1,
      addNumStep : []
    }

  }

  redirect(path){
    // debugger;
    const history = createHistory();
    // this.props.router.push("/");
    history.push(path);
    window.location.reload();
  }

  update(input){
    return event => {
      let project = this.state.project;
      project[input] = event.target.value
      this.setState({project})
    };
  }
  updateStep(input){
    return event => {
      let steps = this.state.step;
      let stepNum = this.state.stepNum;
      let step = steps[stepNum] ? steps[stepNum] : {title: "", body: ""};

      step[input] = event.target.value;
      let newSteps = merge(steps, {stepNum: step});

      this.setState({steps: newSteps})
    };
  }

  handleSubmit(event){
    event.preventDefault;
    let project = this.state.project;
    this.props.createProject({project})
        .then(
          //createSteps
        )
        .then(
            // () =>  <Redirect to="/"/>
            project => {
            let path = `/#/Project/${project.project.id}`;
            this.redirect(path);
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

  addStep(){
    // debugger;
    let stepForm = <div></div>
    if(this.state.addNumStep === 0){
      return stepForm;
    }else{
      stepForm = this.state.addNumStep.map(num => (
        <div>
          <label>
            Step Title
            <input type="text"
              onChange={this.updateStep("title")}
              placeholder="StepTitle"></input>
          </label>
          <label>
            Instructions
            <textarea onChange={this.updateStep("body")}></textarea>
          </label>
          <input type="submit" className="submit-button-new-step" value="Add Step"></input>
        </div>
      ))
      return stepForm
    }
  }

  clickAddStep(){
    let numSteps = this.state.addNumStep;
    numSteps.push('1');
    this.setState({addNumStep: numSteps});
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
          {this.addStep()}
        </form>
        <button onClick={this.clickAddStep}>Add Step</button>
      </div>
    )
  }
}

export default withRouter(CreateProject);
