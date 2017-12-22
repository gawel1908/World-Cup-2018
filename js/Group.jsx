import React from 'react';
import ReactDOM from 'react-dom';


class Group extends React.Component{


  render(){



    let gr = this.props.group.slice();


    gr.sort((a, b)=>{
      return this.props.points[b.id] - this.props.points[a.id]
    })


    let group = gr.map((e, i)=>{
      return(
        <tr key={i}>
          <td>{e.name}</td>
          <td>{this.props.matches[e.id]}</td>
          <td>{this.props.points[e.id]}</td>
        </tr>
      )
    })
    return(
      <table>
        <thead>
          <tr>
            <th colSpan='3'>{this.props.title}</th>
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
