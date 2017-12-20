import React from 'react';
import ReactDOM from 'react-dom';


class Group extends React.Component{


  render(){
    let group = this.props.group.map((e, i)=>{
      return(
        <tr key={i}>
          <td>{e.name}</td>
          <td></td>
          <td>{this.props.points.id}</td>
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

export default Group
