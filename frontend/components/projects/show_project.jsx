import React from 'react';
import createHistory from 'history/createBrowserHistory';
import {Link} from 'react-router-dom';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';
import {HashLink} from 'react-router-hash-link';
import Comments from './comments_container';
import Footer from '../footer';
import showOwnProjects from '../profile_page/own_project_list';


class ShowProject extends React.Component{
  constructor(props){

    super(props);
    this.state = {
      projectId : this.props.match.params.id,
      projectsHash: this.props.projectsHash,
    }
    this.deleteProject = this.deleteProject.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    window.scrolling = 0;
  }

  componentWillMount(){
    this.props.showProject(this.state.projectId);
  }

  componentDidUpdate(){
    if(window.scrolling <2) this.setScroll();
    window.scrolling +=1;
  }

  setScroll(){
    $( document ).ready(function() {
    const $sidebar = $('#sidebar');
    const $sidebarStopper = $('.sidebar-stopper');

    if (!!$sidebar.offset()) { // make sure ".sidebar" element exists
      let generalSidebarHeight = $sidebar.innerHeight();
      let sidebarTop = $sidebar.offset().top;
      let stickOffset = 0;
      $(window).scroll(function(){ // scroll event
        let sidebarStopperPosition = $sidebarStopper.offset().top;
        let stopPoint = sidebarStopperPosition - generalSidebarHeight;
        let windowTop = $(window).scrollTop();

        let $sidebarTopBar = $('#sidebar-top-bar');
        $('#replace-top-bar').css({height: $sidebarTopBar.css("height")});
        $sidebarTopBar.width($('.project-show-header').width());

          if (stopPoint < windowTop) {
            $sidebar.css({ position: 'absolute', top: stopPoint-$('footer').css("height")});
            $sidebarTopBar.css({ position: 'absolute', top: stopPoint-$('footer').css("height")});
            $("#sidebar-top-bar-wrapper").css('display', 'block');
            $sidebarTopBar.css("border-bottom", "none");
            $(".project-show-content-divider").css("border-bottom", "none");
          }else if ((sidebarTop < windowTop)) {
            $sidebar.css({ position: 'fixed', top: 0});
            $sidebarTopBar.css({ position: 'fixed', top: 0 });
            $("#sidebar-top-bar-wrapper").css('display', 'block');
            $sidebarTopBar.css("border-bottom", "none");
            $(".project-show-content-divider").css("border-bottom", "none");

        }else {
            $sidebar.css({position: 'absolute', top: 'initial'});
            $sidebarTopBar.css({position: 'absolute',top: 'initial'});
            $("#sidebar-top-bar-wrapper").css('display', 'none')
            $sidebarTopBar.css("border-bottom", "1px solid grey");
            $(".project-show-content-divider").css("border-bottom", "1px solid grey");
        }
      });
      }
    });
  }

  componentWillReceiveProps(nextProps){
    let projectsHash = {
      projectsHash: nextProps.projectsHash,
      projectId: this.props.match.params.id,
    }

    this.setState(projectsHash)
  }
  deleteProject(){
    this.props.removeProject(this.state.projectId);
    this.props.history.push("/homepage");

  }

  deleteButton(author_name){
    if(localStorage.user !== author_name){
      return <div></div>
    }else {
      return <div className="edit-buttons">
        <Link to={`/edit_project/${this.state.projectId}`}>Update Project</Link>
        <button onClick={this.deleteProject}>Delete This Project</button>
      </div>
    }
  }
  stepImg(step){
    let imgs = <div></div>
    if(step.img_urls.length > 0){
      imgs =step.img_urls.map( (el,idx) => (
        <div className="show-page-container effect2" key={`el${idx}`}>
          <img src={el}></img>
        </div>
      ))
    }
    return imgs
  }
  stepNumLinks(project){
    let stepNums =  project.steps.map(step => (
      <HashLink to={`#stepNum-${step.stepNum}`}
        key={`.stepNum-key-${step.stepNum}`}>Step {step.stepNum}</HashLink>
    ))
    return <div className="jump-step">{stepNums}</div>
  }

  render(){
    let projectList = this.state.projectsHash;
    if(Object.keys(projectList).length === 0) return <div></div>;
    let projectId = this.state.projectId;
    let project = projectList[projectId];
    if(!project.steps) return <div></div>;
    let steps = project.steps.map(step => (
      <div className={`single-step`}
           id={`stepNum-${step.stepNum}`}
           key={step.id}>
        <h4>{step.title}</h4>
        <div className="show-step-photo-section">
          {this.stepImg(step)}
        </div>
        <p className="project-show-words">{step.body}</p>
      </div>
    ))
    return (
      <div>
      <Jumbotron id="project-show-main-picture">
        <img src={project.img_url} className="show-img-url"/>
      </Jumbotron>
      <Grid className="project-show-main">
        <Row className="main-body">
          <Col md={8} sm={12}>
              <Row className="project-show-nav" id="sidebar-top-bar">
                <HashLink to="#show-page-instructions">Instructions</HashLink>
                <HashLink to="#show-page-author-bio">Author</HashLink>
                <HashLink to="#show-page-comments">Comments</HashLink>
                <div id="sidebar-top-bar-wrapper">
                </div>
              </Row>
            <Row id="replace-top-bar">
              <Col></Col>
            </Row>
            <Row className="project-show-header">
                <Col sm={10}>
                  <h1 className="project-show-title">{project.title}</h1>
                  <h4 className="project-show-author">By: {project.author.username}</h4>
                </Col>
                <Col sm={2}>
                  <Link to={`/profile_page/${project.author.id}`} className="profile-pic-small">
                    <img src={project.author.img_url}/>
                  </Link >
                </Col>
            </Row>
            <Row className="project-show-body">
                <div className="project-show-intro">
                  <h3>
                    Description:
                  </h3>
                  <div className="project-show-words">{project.body}</div>
                </div>
                <div id="show-page-instructions">
                  <h3>Instructions: </h3>
                  <div>
                    {steps}
                  </div>
                </div>
                <div className="delete-button">{this.deleteButton(project.author.username)}</div>
                <div id="show-page-author-bio">
                    <div>
                      <h3>About this Author</h3>
                    </div>
                    <div className="show-step-photo-section project-show-words">{project.author.bio}</div>
                </div>
                <div>
                  <Col md={12} className="project-show-comments">
                    <Row><h3 id="show-page-comments">Comments</h3></Row>
                    <Comments projectId={this.state.projectId}/>
                  </Col>
                </div>
            </Row>
          </Col>
          <Col md={4} sm={12} >
              <Col className="project-show-bio" id="sidebar" >
                <div className="project-show-content-divider" id='sidebar-side-bar'>
                  <div>About this Project</div>
                </div>
                <Row className="project-show-content-fav-views">
                  <Col md={4} >
                    <div>Date Posted</div>
                    <div>{project.created_at.slice(0,10)}</div>
                  </Col>
                </Row>
                <div className="project-show-content-divider project-show-content-author">
                  <h3>
                    {project.author.username}
                  </h3>
                  <div className="project-show-sidebar-author-info">
                    <Link to={`/profile_page/${project.author.id}`} className="profile-pic-extra-small">
                      <img src={project.author.img_url}/>
                    </Link >

                    <div className="project-show-sidebar-author-bio project-show-words">{project.author.bio}</div>
                  </div>
                </div>
                <div>
                  Jump to:

                  {this.stepNumLinks(project)}

                </div>

              </Col>

          </Col>
        </Row>
      </Grid>
        </div>
      )
  }
}




export default ShowProject;
