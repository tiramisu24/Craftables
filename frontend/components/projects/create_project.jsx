import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {Redirect} from 'react-router-dom';
import merge from 'lodash/merge';
import ShowErrors from '../show_errors';
import {Grid, Row, Col} from 'react-bootstrap'





class CreateProject extends React.Component{
  constructor(props){
    super(props);

    this.showErrors = this.showErrors.bind(this);
    this.update = this.update.bind(this);
    this.updateStep = this.updateStep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addStep = this.addStep.bind(this);
    this.clickAddStep = this.clickAddStep.bind(this);
    this.changeAddFunctionButtons=this.changeAddFunctionButtons.bind(this);
    this.addFunctionButtons=this.addFunctionButtons.bind(this);

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
      img_urls: {},
      addFunctionButtons: false
    }

  }

  // ComponentDidUpdate(){
  //   let newbol = false;
  //   this.setState({addFunctionButtons:newbol})
  //   debugger;
  // }

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
    // debugger
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
        <Row key={idx} className="create-project-section">
            <Col  md={6} sm={12}>
              <Row className="create-project-title">
                <input type="text"
                  onChange={this.updateStep("title",idx+1)}
                  placeholder={`Step ${idx+1}...`}></input>
              </Row>
              <Row className="create-project-des">
                <textarea onChange={this.updateStep("body",idx+1)}
                          placeholder={"In this step you will..."}>
                </textarea>
              </Row>
            </Col>
            <Col md={6} sm={12}>
              <div className="create-project-img-wrapper">{this.showUploadedImage(this.state.img_urls[idx+1])}</div>
              <div>
              <button className="add-photo" onClick={this.handleCloudinary(idx+1).bind(this)}> <i className="fa fa-camera" aria-hidden="true"></i>
              </button></div>
            </Col>


        </Row>
      ))
      return stepForm
    }
  }
  showUploadedImage(image_urls){
    if (image_urls){
      return image_urls.map(url => (
          <img key={url} src={url} className="create-project-img"/>
        ))
    }else {
      return <div></div>
    }
  }
  changeAddFunctionButtons(event){
    event.preventDefault();
    let newbol = !this.state.addFunctionButtons;
    this.setState({addFunctionButtons:newbol})
  }
  addFunctionButtons(){
    // if(this.state.addFunctionButtons){

      return <span className="new-project-nav-buttons">
        <button onClick={this.handleCloudinary(this.state.addNumStep.length).bind(this)}>
          <i className="fa fa-camera" aria-hidden="true"></i>
        </button>

        <button onClick={this.clickAddStep} className="add-step-button">
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </span>
    // }
  }

  clickAddStep(event){
    event.preventDefault();
    let numSteps = this.state.addNumStep;
    numSteps.push('1');
    this.setState({addNumStep: numSteps});
  }

  render(){
    if (localStorage.user === "") return <div></div>;
      // debugger;
    return(
      <Grid className="create-project-div">
        <div className="create-placeholder"></div>
        <ShowErrors errors={this.props.errors}/>

        <form className="create-project-form" onSubmit={this.handleSubmit}>

          <Row className="create-project-section">
            <Col md={6} sm={12}>
              <Row className="create-project-title">
                <input type="text" onChange={this.update("title")} placeholder="Title" ></input>
              </Row>
              <Row className="create-project-des">
                <textarea onChange={this.update("body")}
                  placeholder="This is how you make..."></textarea>
              </Row>
            </Col>

              <Col md={6} sm={12} className="photo-section">
                <div className="create-project-img-wrapper">
                  <img src={this.state.img_urls[0]} className="create-project-img"/>
                </div>
                <div><button className="add-photo" onClick={this.handleCloudinary(0).bind(this)}> <i className="fa fa-camera" aria-hidden="true"></i></button></div>
              </Col>

            </Row>
            {this.addStep()}
            <Row className="create-project-nav-buttons">

              <div className="double-arrow-icon">
                  <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              </div>
              {this.addFunctionButtons()}

            </Row>

          <div className="submit-button-create-project">
            <input type="submit"  value="Publish"></input>
          </div>
        </form>

      </Grid>
    )
  }
}

export default CreateProject;
