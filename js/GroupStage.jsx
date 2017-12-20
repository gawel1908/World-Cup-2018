import React from 'react';
import ReactDOM from 'react-dom';
import groups from './groups';
import Groups from './Groups.jsx';
import GroupsMatches from './GroupsMatches.jsx';

class GroupStage extends React.Component{
  state ={
    matches: {
    },
    points:{

    },
    firstTeamGoals: '',
    secondTeamGoals: ''
  }


  firstScore = (e)=>{
    this.setState({
      firstTeamGoals: e
    })
  }

  secondScore = (e)=>{
    this.setState({
      secondTeamGoals: e
    })
  }

  addPoints = (id, value)=>{
    let oldValue = 0;
    if(typeof this.state.points[id] !== 'undefined'){
      oldValue = this.state.points[id]
    }
    const newValue = oldValue + value;
    this.setState({
      points:{
        [id]: newValue
      }
    });
    console.log(this.state.points)
  }

  addMatches = (id, value)=>{

    const newValue = oldValue + value;
    this.setState({
      points:{
        [id]: newValue
      }
    })
  }




  render(){

    return(
      <div>
        <Groups  groups={groups} matches={this.state.matches} points={this.state.points}/>
        <GroupsMatches addMatches={this.addMatches} addPoints={this.addPoints} groups={groups} firstScore={this.firstScore} secondScore={this.secondScore} />
      </div>
    )
  }
}

export default GroupStage
