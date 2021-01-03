import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


const NavigationItems = () => {
  let clickedTab='Home';

  if (String(window.location.href).includes("/applications")) {
    clickedTab='Applications'
  } 

  const [currentTab, setCurrentTab]=useState(clickedTab);

  return ( 

      <nav>
      <ul className="nav-items">
        <li 
          className="nav-item" 
          onClick={() => {setCurrentTab('Home')}} >
            <Link              
              to="" 
              className={currentTab === 'Home' ? 'active' : ''}>Home</Link>
        </li>
        <li 
          className="nav-item"
          onClick={() => {setCurrentTab('Applications')}} 
        >
           <Link               
              to="/applications"               
              className={currentTab === 'Applications' ? 'active' : ''}>Applications</Link>
        </li>
      </ul>
    </nav>  




  )
}

export default NavigationItems;
