import React from 'react';
import ReactDOM from 'react-dom';
import Group from './Group.jsx';


class Groups extends React.Component{


  render(){
return(
  <div className='groups'>
    <Group group={this.props.groups.groupA} title='Group A' matches={this.props.matches} points={this.props.points}/>
    <Group group={this.props.groups.groupB} title='Group B' matches={this.props.matches} points={this.props.points}/>
    <Group group={this.props.groups.groupC} title='Group C' matches={this.props.matches} points={this.props.points}/>
    <Group group={this.props.groups.groupD} title='Group D' matches={this.props.matches} points={this.props.points}/>
    <Group group={this.props.groups.groupE} title='Group E' matches={this.props.matches} points={this.props.points}/>
    <Group group={this.props.groups.groupF} title='Group F' matches={this.props.matches} points={this.props.points}/>
    <Group group={this.props.groups.groupG} title='Group G' matches={this.props.matches} points={this.props.points}/>
    <Group group={this.props.groups.groupH} title='Group H' matches={this.props.matches} points={this.props.points}/>
  </div>
    )
  }
}

export default Groups;
