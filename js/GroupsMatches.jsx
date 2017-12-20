import React from 'react';
import ReactDOM from 'react-dom';

import GroupsMatch from './GroupsMatch.jsx';


class GroupsMatches extends React.Component{
  render(){
    return(
      <div>
        <GroupsMatch addPoints={this.props.addPoints} group={this.props.groups.groupA} firstScore={this.props.firstScore} secondScore={this.props.secondScore}/>
        <GroupsMatch addPoints={this.props.addPoints} group={this.props.groups.groupB} firstScore={this.props.firstScore} secondScore={this.props.secondScore}/>
        <GroupsMatch addPoints={this.props.addPoints} group={this.props.groups.groupC} firstScore={this.props.firstScore} secondScore={this.props.secondScore}/>
        <GroupsMatch addPoints={this.props.addPoints} group={this.props.groups.groupD} firstScore={this.props.firstScore} secondScore={this.props.secondScore}/>
        <GroupsMatch addPoints={this.props.addPoints} group={this.props.groups.groupE} firstScore={this.props.firstScore} secondScore={this.props.secondScore}/>
        <GroupsMatch addPoints={this.props.addPoints} group={this.props.groups.groupF} firstScore={this.props.firstScore} secondScore={this.props.secondScore}/>
        <GroupsMatch addPoints={this.props.addPoints} group={this.props.groups.groupG} firstScore={this.props.firstScore} secondScore={this.props.secondScore}/>
        <GroupsMatch addPoints={this.props.addPoints} group={this.props.groups.groupH} firstScore={this.props.firstScore} secondScore={this.props.secondScore}/>
      </div>
    )
  }
}

export default GroupsMatches
