import React from 'react';
import './Navigation.css';


const NavigationItems = (props) => {

    // console.log('Navigation Items')

      return (
        // <header className="Nav-Bar">                
        <ul className="Nav-Items">
          <li className="Navigation-Item" >
              <a 
                href="/"                
                className={props.Current_Tab==='Home' ? 'active' : ''}
                // onClick={() => SetActiveTab('Home')} 
                >Home</a>
          </li>
          <li className="Navigation-Item" >
              <a                 
                href="/Applications"
                className={ props.Current_Tab==='Applications' ? 'active' : ''} 
                // onClick={() => SetActiveTab('Applications')}  
                >Applications</a>
          </li>
          <li className="Navigation-Item">
            {/* <p>{props.Current_Tab}</p> */}
          </li>
        </ul>          
      // </header>  
    )
}





export default NavigationItems;