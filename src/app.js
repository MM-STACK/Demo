import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useLocation
} from 'react-router-dom';
//  Link

import  './App.css';
import NavigationItems from './Containers/TopPane/NaviagtionItems';
import TombStone from './Containers/TopPane/TombStone'
import HomePage from './Containers/HomePage/HomePage';
import ErrorPage from './Pages/ErrorPage';
import AsyncComponent from './HOC/AsyncComponent'

const App = () => { 
  let Current_Tab='Home'

  const ApplicationsPage = AsyncComponent(() => {
      return import('./Containers/Applications/ApplicationsPage');
    }
  )

  if (String(window.location.href).includes("/Applications")) {
    Current_Tab='Applications'
  } 

  return (
     <div className="App-Main-Pane">
       <div className="App-Top-Pane">
          <NavigationItems Current_Tab={Current_Tab} />          
          <TombStone  />          
       </div>

        
        <div className="App-Content-Pane">
          <Router basename='/demo/'>
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
