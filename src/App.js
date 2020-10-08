import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useLocation
} from 'react-router-dom';
//  Link

import AsyncComponent from './HOC/AsyncComponent'

import  './App.css';

import NavigationItems from './Containers/NavigationBar/NaviagtionItems'
import HomePage from './Pages/HomePage';

const ApplicationsPage = AsyncComponent(() => {
 	  return import('./Containers/Applications/ApplicationsPage');
 }
)

const App = () => {

  // console.log('APP JS' )
  let Current_Tab='Home'

  if (String(window.location.href).includes("/Applications")) {
    Current_Tab='Applications'
  } 


  return (

      <div className="App-Main-Layout">
        <div className="App-Navigation-Bar">
         <NavigationItems Current_Tab={Current_Tab} />
        </div>
        
        <div className="App-Content-Container">
        <Router>
          <Switch>
            <Route path="/Applications" exact component={ApplicationsPage} />
            <Route path="/" exact component={HomePage} /> 
          </Switch>          
        </Router>
        </div> 
      </div>
  
  );
}


export default App;
