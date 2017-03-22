import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {Redirect} from 'react-router-dom';
import merge from 'lodash/merge';

// import DropzoneComponent from 'react-dropzone-component';
// import Dropzone from 'react-dropzone';
// import request from 'superagent';
import ShowErrors from '../show_errors';





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
        featured: true,
        img_url: null
      },
      steps :{},
      addNumStep : [],
      img_urls: {}
    }

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
  handleSubmit(event){
    event.preventDefault;
    let project = this.state.project;

    if(this.state.img_urls[0]){
      project["img_url"]=this.state.img_urls[0]
    }
    debugger
    this.props.createProject({project})
        .then( () => {
            let steps = this.state.steps;
            let numberSteps = Object.keys(this.state.steps);
            numberSteps.forEach( numStep => {
              let step = steps[numStep];
              step["stepNum"] = numStep;

              if(this.state.img_urls[numStep]){
                console.log(this.state.img_urls);
                step["img_urls"] = this.state.img_urls[numStep]
                console.log(this.state.img_urls[numStep]);
              }
              debugger;
              step["project_id"] = this.props.projectId;
              debugger
              this.props.newStep({step})
            })
            debugger;

            let path = `/project/${this.props.projectId}`;
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
              <div>{this.showUploadedImage(this.state.img_urls[idx+1])}</div>
              <div><button onClick={this.handleCloudinary(idx+1).bind(this)}> Click me!</button></div>
            </div>
          </div>
      ))
      return stepForm
    }
  }
  showUploadedImage(image_urls){
    if (image_urls){
      return image_urls.map(url => (
          <img key={url} src={url}/>
        ))
    }else {
      return <div></div>
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
        <ShowErrors errors={this.props.errors}/>
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
            <div>
              <img src={this.state.img_urls[0]}/>
            </div>
            <div><button onClick={this.handleCloudinary(0).bind(this)}>click me!</button></div>
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

export default CreateProject;
