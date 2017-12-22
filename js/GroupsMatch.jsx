import React from 'react';
import ReactDOM from 'react-dom';


class GroupsMatch extends React.Component{



type = (e)=>{

  e.preventDefault();

  let input1 = e.currentTarget.parentElement.children[1];
  let input2 = e.currentTarget.parentElement.children[3];






    if(input1 !== '' && input2 !== ''){
      this.props.addMatches(input1.dataset.id, 1, input2.dataset.id, 1);
      e.currentTarget.disabled = true;
    }


    if(Number(input1.value) > Number(input2.value)){
      this.props.addPoints(input1.dataset.id, 3, input2.dataset.id, 0)
    }else if(input1.value === input2.value){
      this.props.addPoints(input1.dataset.id, 1, input2.dataset.id, 1)
    }else{
      this.props.addPoints(input2.dataset.id, 3, input1.dataset.id, 0)
    }


}

  render(){

      return(
        <form>
          <div>
            <label>{this.props.group[0].name} </label>
            <input onChange={this.changeFirstScore} data-id={this.props.group[0].id} type="number"/>
            <span>:</span>
            <input onChange={this.changeSecondScore} data-id={this.props.group[1].id} type="number"/>
            <label> {this.props.group[1].name} </label>
            <button disabled={false} onClick={this.type}>Type</button>
            <br/>
          </div>
          <div>
            <label>{this.props.group[2].name} </label>
            <input onChange={this.changeFirstScore} data-id={this.props.group[2].id} type="number"/>
            <span>:</span>
            <input onChange={this.changeSecondScore} data-id={this.props.group[3].id} type="number"/>
            <label> {this.props.group[3].name} </label>
            <button disabled={false} onClick={this.type}>Type</button>
            <br/>
          </div>
          <div>
            <label>{this.props.group[0].name} </label>
            <input onChange={this.changeFirstScore} data-id={this.props.group[0].id} type="number"/>
            <span>:</span>
            <input onChange={this.changeSecondScore} data-id={this.props.group[2].id} type="number"/>
            <label> {this.props.group[2].name} </label>
            <button disabled={false} onClick={this.type}>Type</button>
            <br/>
          </div>
          <div>
            <label>{this.props.group[1].name} </label>
            <input onChange={this.changeFirstScore} data-id={this.props.group[1].id} type="number"/>
            <span>:</span>
            <input onChange={this.changeSecondScore} data-id={this.props.group[3].id} type="number"/>
            <label> {this.props.group[3].name} </label>
            <button disabled={false} onClick={this.type}>Type</button>
            <br/>
          </div>
          <div>
            <label>{this.props.group[0].name} </label>
            <input onChange={this.changeFirstScore} data-id={this.props.group[0].id} type="number"/>
            <span>:</span>
            <input onChange={this.changeSecondScore} data-id={this.props.group[3].id} type="number"/>
            <label> {this.props.group[3].name} </label>
            <button disabled={false} onClick={this.type}>Type</button>
            <br/>
          </div>
          <div>
            <label>{this.props.group[1].name} </label>
            <input onChange={this.changeFirstScore} data-id={this.props.group[1].id} type="number"/>
            <span>:</span>
            <input onChange={this.changeSecondScore} data-id={this.props.group[2].id} type="number"/>
            <label> {this.props.group[2].name} </label>
            <button disabled={false} onClick={this.type}>Type</button>
            <br/>
          </div>
        </form>
      )

  }
}
export default GroupsMatch
