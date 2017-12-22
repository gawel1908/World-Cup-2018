import React from 'react';
import ReactDOM from 'react-dom';
import Group from './Group.jsx'



class GroupOf16 extends React.Component{

  nextRound = (e)=>{

    e.preventDefault();
    let input1 = e.currentTarget.parentElement.children[1];
    let input2 = e.currentTarget.parentElement.children[3];
    let team1 = e.currentTarget.parentElement.children[0];
    let team2 = e.currentTarget.parentElement.children[2];

    if(input1.value > input2.value){
      this.props.quarterFinals.pair1.push(team1.innerText);
    }else if(input1.value < input2.value){
      this.props.quarterFinals.pair1.push(team2.innerText);
    }

    e.currentTarget.disabled = true;
    console.log(this.props.quarterFinals.pair1)

  }

  render(){

    let grA = this.props.groupA.slice();


    grA.sort((a, b)=>{
      return this.props.points[b.id] - this.props.points[a.id]
    });
    let grB = this.props.groupB.slice();


    grB.sort((a, b)=>{
      return this.props.points[b.id] - this.props.points[a.id]
    });
    let grC = this.props.groupC.slice();


    grC.sort((a, b)=>{
      return this.props.points[b.id] - this.props.points[a.id]
    });
    let grD = this.props.groupD.slice();


    grD.sort((a, b)=>{
      return this.props.points[b.id] - this.props.points[a.id]
    });
    let grE = this.props.groupE.slice();


    grE.sort((a, b)=>{
      return this.props.points[b.id] - this.props.points[a.id]
    });

    let grF = this.props.groupF.slice();


    grF.sort((a, b)=>{
      return this.props.points[b.id] - this.props.points[a.id]
    });
    let grG = this.props.groupG.slice();


    grG.sort((a, b)=>{
      return this.props.points[b.id] - this.props.points[a.id]
    });
    let grH = this.props.groupH.slice();


    grH.sort((a, b)=>{
      return this.props.points[b.id] - this.props.points[a.id]
    });
    console.log(grA[0].name)


    return(
      <div className="groups_of">
        <div>
          <div>{grA[0].name}</div>
          <input type="number"/>
          <div>{grB[1].name}</div>
          <input type="number"/>
          <button onClick={this.nextRound}>Type</button>
        </div>
        <br/>
        <div>
          <div>{grC[0].name}</div>
          <input type="number"/>
          <div>{grD[1].name}</div>
          <input type="number"/>
          <button onClick={this.nextRound}>Type</button>
        </div>
        <br/>
        <div>
          <div>{grE[0].name}</div>
          <input type="number"/>
          <div>{grF[1].name}</div>
          <input type="number"/>
          <button onClick={this.nextRound}>Type</button>
        </div>
        <br/>
        <div>
          <div>{grG[0].name}</div>
          <input type="number"/>
          <div>{grH[1].name}</div>
          <input type="number"/>
          <button onClick={this.nextRound}>Type</button>
        </div>
        <br/>
        <div>
          <div>{grB[0].name}</div>
          <input type="number"/>
          <div>{grA[1].name}</div>
          <input type="number"/>
          <button onClick={this.nextRound}>Type</button>
        </div>
        <br/>
        <div>
          <div>{grD[0].name}</div>
          <input type="number"/>
          <div>{grC[1].name}</div>
          <input type="number"/>
          <button onClick={this.nextRound}>Type</button>
        </div>
        <br/>
        <div>
          <div>{grF[0].name}</div>
          <input type="number"/>
          <div>{grE[1].name}</div>
          <input type="number"/>
          <button onClick={this.nextRound}>Type</button>
        </div>
        <br/>
        <div>
          <div>{grH[0].name}</div>
          <input type="number"/>
          <div>{grG[1].name}</div>
          <input type="number"/>
          <button onClick={this.nextRound}>Type</button>
        </div>
      </div>

    )
  }
}

export default  GroupOf16
