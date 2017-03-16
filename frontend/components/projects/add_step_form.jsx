import React from 'react';

class AddStepForm extends React.Component{
 constructor(props){
   super(props)
   this.state = {
     title: "",
     body: "",
     project_id: this.props.projectId
   }
   this.update = this.update.bind(this);
 }
 update(input){
   return event => this.setState({[input]: event.target.value });
 }
 hansdleSubmit(){
   return () => {
     event.preventDefault();
     let step = {
       title: this.state.title,
       body: this.state.body,
       project_id: this.state.project_id
     }
     this.props.newStep({step});
   }

 }
 render(){
  return (
  <div>
    <form className="create-step-form">
     <label>
       Step Title
       <input type="text"
         onChange={this.update("title")}
       placeholder="StepTitle"></input>
     </label>
     <label>
       Instructions
       <textarea onChange={this.update("body")}></textarea>
     </label>
     <input type="submit" className="submit-button-new-step" value="Add Step"></input>
    </form>
  </div>
 )
 }
}

export default AddStepForm;
