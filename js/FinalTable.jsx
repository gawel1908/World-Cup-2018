import React from 'react';
import ReactDOM from 'react-dom';
import GroupOf16 from './GroupOf16.jsx';



class FinalTable extends React.Component{


  render(){



    return(
      <div className="final_table">
        <GroupOf16 finalist={this.props.finalist} quarterFinals={this.props.quarterFinals} semiFinals={this.props.semiFinals}  groupA={this.props.groups.groupA} groupB={this.props.groups.groupB} groupC={this.props.groups.groupC} groupD={this.props.groups.groupD} groupE={this.props.groups.groupE} groupE={this.props.groups.groupE} groupF={this.props.groups.groupF} groupG={this.props.groups.groupG} groupH={this.props.groups.groupH} matches={this.props.matches} points={this.props.points} />
      </div>

    )
  }
}

export default  FinalTable
