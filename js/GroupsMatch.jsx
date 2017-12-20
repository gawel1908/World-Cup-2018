import React from 'react';
import ReactDOM from 'react-dom';


class GroupsMatch extends React.Component{

  changeFirstScore = (e)=>{
    this.props.firstScore(e.currentTarget.value);
  }

  changeSecondScore = (e)=>{
    this.props.secondScore(e.currentTarget.value)
  }



type = (e)=>{

  e.preventDefault();

  let inputA1 = document.querySelector(`[data-id=${this.props.group[0].id}]`);
  let inputA2 = document.querySelector(`[data-id=${this.props.group[1].id}]`);

    if(inputA1.value > inputA2.value){
      this.props.addPoints(inputA1.dataset.id, 3)
    }else if(inputA1.value === inputA2.value){
      this.props.addPoints(inputA1.dataset.id, 1)
      this.props.addPoints(inputA2.dataset.id, 1)
    }else{
      this.props.addPoints(inputA2.dataset.id, 3)
    }

}

  render(){

      return(
        <form>
          <label>{this.props.group[0].name}</label>
          <input onChange={this.changeFirstScore} data-id={this.props.group[0].id} type="number"/>
          <span>:</span>
          <input onChange={this.changeSecondScore} data-id={this.props.group[1].id} type="number"/>
          <label>{this.props.group[1].name}</label>
          <button onClick={this.type}>Type</button>
          <br/>
          <label>{this.props.group[2].name}</label>
          <input onChange={this.changeFirstScore} data-id={this.props.group[2].id} type="number"/>
          <span>:</span>
          <input onChange={this.changeSecondScore} data-id={this.props.group[3].id} type="number"/>
          <label>{this.props.group[3].name}</label>
          <button onClick={this.type}>Type</button>
          <br/>
          <label>{this.props.group[0].name}</label>
          <input onChange={this.changeFirstScore} data-id={this.props.group[0].id} type="number"/>
          <span>:</span>
          <input onChange={this.changeSecondScore} data-id={this.props.group[2].id} type="number"/>
          <label>{this.props.group[2].name}</label>
          <button onClick={this.type}>Type</button>
          <br/>
          <label>{this.props.group[1].name}</label>
          <input onChange={this.changeFirstScore} data-id={this.props.group[1].id} type="number"/>
          <span>:</span>
          <input onChange={this.changeSecondScore} data-id={this.props.group[3].id} type="number"/>
          <label>{this.props.group[3].name}</label>
          <button onClick={this.type}>Type</button>
          <br/>
          <label>{this.props.group[0].name}</label>
          <input onChange={this.changeFirstScore} data-id={this.props.group[0].id} type="number"/>
          <span>:</span>
          <input onChange={this.changeSecondScore} data-id={this.props.group[3].id} type="number"/>
          <label>{this.props.group[3].name}</label>
          <button onClick={this.type}>Type</button>
          <br/>
          <label>{this.props.group[1].name}</label>
          <input onChange={this.changeFirstScore} data-id={this.props.group[1].id} type="number"/>
          <span>:</span>
          <input onChange={this.changeSecondScore} data-id={this.props.group[2].id} type="number"/>
          <label>{this.props.group[2].name}</label>
          <button onClick={this.type}>Type</button>
          <br/>
        </form>
      )

  }
}
export default GroupsMatch
