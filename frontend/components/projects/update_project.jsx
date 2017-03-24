import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {Redirect} from 'react-router-dom';
import merge from 'lodash/merge';
import {Grid, Row, Col} from 'react-bootstrap'

// import AddStepForm from './add_step_form';


class UpdateProject extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      projectId : this.props.projectId,
      project: this.props.projectsHash,
      img_urls: {}
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
    let path = `/project/${this.props.projectId}`;
    this.redirect(path);

  }
  handleCloudinary(stepNumPic) {
    return (e) => {
      e.preventDefault();
      cloudinary.openUploadWidget(cloudinary_options, (error, results) => {
        if(error){
          console.log(error);
        }else{

          let img_urls = null

          if(stepNumPic === 0){
            img_urls = results[0].secure_url;
          }else {
            img_urls = results.map(result => (
              result.secure_url
            ))
          }
          let hash = merge(this.state.img_urls, {[stepNumPic]: img_urls });

          this.setState({img_urls: hash})
        }
      })
    }
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
        <Grid className="create-project-div">
          <div className="create-placeholder"></div>

          <ul>{this.showErrors}</ul>
          <form className="create-project-form" onSubmit={this.handleSubmit}>
            <Row className="create-project-section">
              <Col md={6} sm={12}>
                <Row className="create-project-title">
                  <input type="text"
                         onChange={this.update("title")}
                         placeholder="Title"
                         value={project.title}></input>
                </Row>
                <Row className="create-project-des">
                  <textarea onChange={this.update("body")}
                            value={project.body}></textarea>
                </Row>
              </Col>

              <Col md={6} sm={12} className="photo-section">
                <div className="create-project-img-wrapper">
                  <img src={this.state.img_urls[0]} className="create-project-img"/>
                </div>
                <div><button className="add-photo" onClick={this.handleCloudinary(0).bind(this)}> <i className="fa fa-camera" aria-hidden="true"></i></button></div>
              </Col>

            </Row>
            {this.showSteps(project.steps)}
            <div className="submit-button-create-project">
              <input type="submit"  value="Publish"></input>
            </div>
          </form>
          <div className="create-placeholder"></div>

        </Grid>
      )

    }else {
      return <div></div>;
      }
  }
}

export default UpdateProject;
