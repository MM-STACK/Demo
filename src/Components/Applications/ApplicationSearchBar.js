import React  from 'react';
import './ApplicationStyles.css'

const ApplicationSearchBar = (props) => {

    return(
        <div className="Search-Bar">
            <input                 
                type="text"           
                value = {props.Search_Text} 
                placeholder="Design Patterns+: HOC, API, Lazy Loading, Error Boundaries, Progressive scrolling..." 
                onChange={(event) => props.OnChangeHandler(event.target.value)}
            />
            <button onClick={() => props.OnChangeHandler('')}>Clear</button>
        </div> 

    )
}

export default ApplicationSearchBar;