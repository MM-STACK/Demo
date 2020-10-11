import React from 'react';
import './Navigation.css';


const NavigationItems = (props) => {

    // console.log('Navigation Items')

      return (
        // <header className="Nav-Bar">                
        <ul className="Nav-Items">
          <li className="Navigation-Item" >
              <a href="/" className={props.Current_Tab==='Home' ? 'active' : ''}>Home</a>
          </li>
          <li className="Navigation-Item" >
              <a href="/Applications" className={ props.Current_Tab==='Applications' ? 'active' : ''}>Applications</a>
          </li>          
        </ul>          
      // </header>  
    )
}





export default NavigationItems;