import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useLocation
} from 'react-router-dom';
//  Link

import  './App.css';
import NavigationItems from './Containers/NavigationBar/NaviagtionItems'
import HomePage from './Containers/HomePage/HomePage';
import ErrorPage from './Pages/ErrorPage';
import AsyncComponent from './HOC/AsyncComponent'

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
     <div className="App-Main-Pane">
        <div className="App-Navigation-Pane">
          <NavigationItems Current_Tab={Current_Tab} />
        </div>
        
        <div className="App-Content-Pane">
        <Router>
          <Switch>
            <Route path="/Applications" component={ApplicationsPage} />
            <Route path="/" exact component={HomePage} /> 
            <Route component={ErrorPage} />             
          </Switch>          
        </Router>
        </div>       
    </div>
  );
}


export default App;
