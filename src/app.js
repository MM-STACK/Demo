import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useLocation
} from 'react-router-dom';
//  Link

import './App.css';
import NavigationItems from './Containers/TopPane/NaviagtionItems';
import TombStone from './Containers/TopPane/TombStone'
import HomePage from './Containers/HomePage/HomePage';
import ErrorPage from './Pages/ErrorPage';

// import ApplicationsPage from './Containers/Applications/ApplicationsPage';
import AsyncComponent from './HOC/AsyncComponent'

const App = () => {
  
  //lazy loading  
  const ApplicationsPage = AsyncComponent(() => {
    return import('./Containers/Applications/ApplicationsPage');
  })

  // basename='/demo'
  return (
    <Router >
      <div className="App-Main-Pane">
        <div className="App-Top-Pane">
          <NavigationItems />
          <TombStone />
        </div>

        {/* component={HomePage}  */}

        {/* render={(props) => (<Dashboard {...props} isAuthed={true} /> )} */}

        <div className="App-Content-Pane">
          <Switch>
            <Route path="/applications" component={ApplicationsPage}/>
            <Route path="/" exact component={HomePage} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;
