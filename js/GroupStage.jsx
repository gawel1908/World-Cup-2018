import React from 'react';
import ReactDOM from 'react-dom';
import groups from './groups';
import Groups from './Groups.jsx';
import GroupsMatches from './GroupsMatches.jsx';
import FinalTable from './FinalTable.jsx';

class GroupStage extends React.Component{



  state ={
    matches: {

    },
    points:{

    },
    groupOf16:{
      pair1:[

      ],
      pair2:[

      ],
      pair3:[

      ],
      pair4:[

      ],
      pair5:[

      ],
      pair6:[

      ],
      pair7:[

      ],
      pair8:[

      ]
    },
    quarterFinals:{
      pair1:[

      ],
      pair1:[

      ],
      pair1:[

      ],
      pair1:[

      ]

    },
    semiFinals:{
      pair1:[

      ],
      pair1:[

      ]

    },
    final:[

    ]

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
    this.setState({
      points: points
    });

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
    });


  }




  render(){



    return(
      <div className='group_stage'>
        <h1>Group Stage</h1>
        <Groups groups={groups} matches={this.state.matches} points={this.state.points}/>
        <GroupsMatches addMatches={this.addMatches} addPoints={this.addPoints} groups={groups} firstScore={this.firstScore} secondScore={this.secondScore} />
        <FinalTable finalist={this.finalist} groups={groups} matches={this.state.matches} points={this.state.points} groupOf16={this.state.groupOf16} quarterFinals={this.state.quarterFinals} />
      </div>
    )
  }
}

export default GroupStage
