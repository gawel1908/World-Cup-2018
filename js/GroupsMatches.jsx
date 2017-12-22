import React from 'react';
import ReactDOM from 'react-dom';

import GroupsMatch from './GroupsMatch.jsx';


class GroupsMatches extends React.Component{
  render(){
    return(
      <div className='group_matches'>
        <h1>Group Matches</h1>
        <h3>Group A</h3>
        <GroupsMatch addMatches={this.props.addMatches} addPoints={this.props.addPoints} group={this.props.groups.groupA}  points={this.props.points} matches={this.props.matches}/>
        <h3>Group B</h3>
        <GroupsMatch addMatches={this.props.addMatches} addPoints={this.props.addPoints} group={this.props.groups.groupB}  points={this.props.points} matches={this.props.matches}/>
        <h3>Group C</h3>
        <GroupsMatch addMatches={this.props.addMatches} addPoints={this.props.addPoints} group={this.props.groups.groupC}  points={this.props.points} matches={this.props.matches}/>
        <h3>Group D</h3>
        <GroupsMatch addMatches={this.props.addMatches} addPoints={this.props.addPoints} group={this.props.groups.groupD}  points={this.props.points} matches={this.props.matches}/>
        <h3>Group E</h3>
        <GroupsMatch addMatches={this.props.addMatches} addPoints={this.props.addPoints} group={this.props.groups.groupE}  points={this.props.points} matches={this.props.matches}/>
        <h3>Group F</h3>
        <GroupsMatch addMatches={this.props.addMatches} addPoints={this.props.addPoints} group={this.props.groups.groupF}  points={this.props.points} matches={this.props.matches}/>
        <h3>Group G</h3>
        <GroupsMatch addMatches={this.props.addMatches} addPoints={this.props.addPoints} group={this.props.groups.groupG}  points={this.props.points} matches={this.props.matches}/>
        <h3>Group H</h3>
        <GroupsMatch addMatches={this.props.addMatches} addPoints={this.props.addPoints} group={this.props.groups.groupH}  points={this.props.points} matches={this.props.matches}/>
      </div>
    )
  }
}

export default GroupsMatches
