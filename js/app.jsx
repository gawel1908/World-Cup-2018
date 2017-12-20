import React from 'react';
import ReactDOM from 'react-dom';
import GroupStage from './GroupStage.jsx'




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
