import React from 'react';
import ReactDOM from 'react-dom';
import GroupStage from './GroupStage.jsx'

import {Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';




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
