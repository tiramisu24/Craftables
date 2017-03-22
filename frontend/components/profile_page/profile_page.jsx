import React from 'react';
import OwnProjectContainer from './own_projects_container';
class ProfilePage extends React.Component{
  constructor(props){
    super(props)
    this.state={userId: this.props.match.params.id}
  }

  render(){
    debugger;
    return <div>
      <OwnProjectContainer userId={this.state.userId}/>
    </div>
  }
}

export default ProfilePage;
