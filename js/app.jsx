import React from 'react';
import ReactDOM from 'react-dom';
import groups from './groups';




class Groups extends React.Component{


  render(){
return(
  <div>
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

class Group extends React.Component{


  render(){
    let group = this.props.group.map((e, i)=>{
      return(
        <tr key={i}>
          <td>{e.name}</td>
          <td>{this.props.matches}</td>
          <td>{this.props.points}</td>
        </tr>
      )
    })
    return(
      <table>
        <thead>
          <tr>
            <th>{this.props.title}</th>
          </tr>
          <tr>
            <th>Team</th>
            <th>Matches</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {group}
        </tbody>
      </table>
    )
  }
}
class GroupsMatches extends React.Component{
  render(){
    return(
      <div>
        <GroupsMatch group={this.props.groups.groupA} firstScore={this.props.firstScore} secondScore={this.props.secondScore} />
        <GroupsMatch group={this.props.groups.groupB} firstScore={this.props.firstScore} secondScore={this.props.secondScore}/>
        <GroupsMatch group={this.props.groups.groupC} firstScore={this.props.firstScore} secondScore={this.props.secondScore}/>
        <GroupsMatch group={this.props.groups.groupD} firstScore={this.props.firstScore} secondScore={this.props.secondScore}/>
        <GroupsMatch group={this.props.groups.groupE} firstScore={this.props.firstScore} secondScore={this.props.secondScore} />
        <GroupsMatch group={this.props.groups.groupF} firstScore={this.props.firstScore} secondScore={this.props.secondScore}/>
        <GroupsMatch group={this.props.groups.groupG} firstScore={this.props.firstScore} secondScore={this.props.secondScore}/>
        <GroupsMatch group={this.props.groups.groupH} firstScore={this.props.firstScore} secondScore={this.props.secondScore}/>
      </div>
    )
  }
}

class GroupsMatch extends React.Component{

  changeFirstScore = (e)=>{
    this.props.firstScore(e.currentTarget.value);
  }

  changeSecondScore = (e)=>{
    this.props.secondScore(e.currentTarget.value)
  }



  render(){


      return(
        <form>
          <label>{this.props.group[0].name}</label>
          <input onChange={this.changeFirstScore} type="number"/>
          <span>:</span>
          <input onChange={this.changeSecondScore} type="number"/>
          <label>{this.props.group[1].name}</label>
          <br/>
          <label>{this.props.group[2].name}</label>
          <input type="number"/>
          <span>:</span>
          <input type="number"/>
          <label>{this.props.group[3].name}</label>
          <br/>
          <label>{this.props.group[0].name}</label>
          <input type="number"/>
          <span>:</span>
          <input type="number"/>
          <label>{this.props.group[2].name}</label>
          <br/>
          <label>{this.props.group[1].name}</label>
          <input type="number"/>
          <span>:</span>
          <input type="number"/>
          <label>{this.props.group[3].name}</label>
          <br/>
          <label>{this.props.group[0].name}</label>
          <input type="number"/>
          <span>:</span>
          <input type="number"/>
          <label>{this.props.group[3].name}</label>
          <br/>
          <label>{this.props.group[1].name}</label>
          <input type="number"/>
          <span>:</span>
          <input type="number"/>
          <label>{this.props.group[2].name}</label>
          <br/>
        </form>
      )

  }
}

class GroupStage extends React.Component{
  state ={
    matches: 0,
    points: 0,
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




  render(){

    return(
      <div>
        <Groups groups={groups} matches={this.state.matches} points={this.state.points}/>
        <GroupsMatches groups={groups} firstScore={this.firstScore} secondScore={this.secondScore} />
      </div>
    )
  }
}

class App extends React.Component{
  render(){
    return(
      <GroupStage />
    )
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
