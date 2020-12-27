import React from 'react';
import './Navigation.css';


const navigationItems = (props) => {

    // console.log('Navigation Items')

      return (     
        <div className="Navigation-Pane">
          <ul className="Nav-Items">
            <li className="Navigation-Item" >
                <a href="/" className={props.Current_Tab==='Home' ? 'active' : ''}>Home</a>
            </li>
            <li className="Navigation-Item" >
                <a href="/Applications" className={ props.Current_Tab==='Applications' ? 'active' : ''}>Applications</a>
            </li>          
          </ul>                  
        </div>   
        
    )
}

export default navigationItems;
