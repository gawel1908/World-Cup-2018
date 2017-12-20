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

    }
  }


  addPoints = (id1, value1, id2, value2)=>{

    const points = {...this.state.points};


    if(typeof points[id1] === 'undefined' && typeof points[id1] === 'undefined'){
      points[id1] = value1;
      points[id2] = value2;
    }else{
      points[id1] += value1;
      points[id2] += value2;
    }
    console.log(points, 'points');
    this.setState({
      points: points
    })
  }

  addMatches = (id1, value1, id2, value2)=>{

    const matches = {...this.state.matches};
    if(typeof matches[id1] === 'undefined' && typeof matches[id2] === 'undefined'){
      matches[id1] = value1;
      matches[id2] = value2;
    }else{
      matches[id1] += value1;
      matches[id2] += value2;
    }
    this.setState({
      matches: matches
    })
  }



  render(){


    return(
      <div>
        <h1>Group Stage</h1>
        <Groups  groups={groups} matches={this.state.matches} points={this.state.points}/>
        <GroupsMatches addMatches={this.addMatches} addPoints={this.addPoints} groups={groups} firstScore={this.firstScore} secondScore={this.secondScore} />
      </div>
    )
  }
}

export default GroupStage
