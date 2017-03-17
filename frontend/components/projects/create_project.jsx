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
    this.updateStep = this.updateStep.bind(this);
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
  updateStep(input,stepNum){
    return event => {
      if(stepNum === 0) return null;
      let steps = this.state.steps;
      let step = steps[stepNum] ? steps[stepNum] : {title: "", body: ""};

      step[input] = event.target.value;
      let newSteps = merge(steps, {[stepNum]: step});

      this.setState({steps: newSteps})
    };
  }

  handleSubmit(event){
    event.preventDefault;
    let project = this.state.project;
    this.props.createProject({project})
        .then( () => {
            let steps = this.state.steps;
            let numberSteps = Object.keys(this.state.steps);
            numberSteps.forEach( numStep => {
              let step = steps[numStep];
              step["stepNum"] = numStep;
              step["project_id"] = this.props.projectId;
              debugger;
              this.props.newStep({step});
            })
          }
        )
        .then(
            project => {
            let path = `/#/Project/${this.props.projectId}`;
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
    let stepForm = <div></div>
    if(this.state.addNumStep === 0){
      return stepForm;
    }else{
      stepForm = this.state.addNumStep.map((num,idx) => (
        <div key={idx} className="create-project-form-inputs">
            <div className="create-project-form-text-inputs">
              <label>
                <input type="text"
                  onChange={this.updateStep("title",idx+1)}
                  placeholder="StepTitle"></input>
              </label>
              <label>
                <textarea onChange={this.updateStep("body",idx+1)}></textarea>
              </label>
            </div>
            <div>Future Image</div>
          </div>
      ))
      return stepForm
    }
  }

  clickAddStep(event){
    event.preventDefault();
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
          <div className="create-project-form-inputs">
            <div className="create-project-form-text-inputs">
              <label>
                <input type="text" onChange={this.update("title")} placeholder="Title" ></input>
              </label>

              <label>
                <textarea onChange={this.update("body")}></textarea>
              </label>
            </div>
            <div className>Future Image Upload</div>
          </div>
          <div className="submit-button-create-project">
            <input type="submit"  value="Publish"></input>
          </div>
          {this.addStep()}
        </form>
        <button onClick={this.clickAddStep} className="add-step-button">Add Step</button>
      </div>
    )
  }
}

export default withRouter(CreateProject);
