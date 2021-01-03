import React, {  useState, useEffect } from 'react';
import './ApplicationStyles.css'

const ApplicationSearchBar = (props) => {        
    const [localSearchText, setLocalSearchText] = useState('');

    useEffect(() => {        
        if(localSearchText.length >= 3){
            props.OnSearchTextChangedHandler(localSearchText);
        } else if (props.searchText !== '')  {        
            props.OnSearchTextChangedHandler('');        
    }
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[localSearchText])



    return(
        // <div className="Search-Bar">
        //     <input                 
        //         type="text"           
        //         value = {props.searchText} 
        //         placeholder="Design Patterns+: HOC, API, Lazy Loading, Error Boundaries, Progressive scrolling..." 
        //         onChange={(event) => props.OnSearchTextChangedHandler(event.target.value)}
        //     />
        //     <button onClick={() => props.OnSearchTextChangedHandler('')}>Clear</button>
        // </div> 

        <div className="Search-Bar">
            <input                 
                type="text"           
                value = {localSearchText} 
                placeholder="Design Patterns+: HOC, API, Lazy Loading, Error Boundaries, Progressive scrolling..." 
                onChange={(event) => setLocalSearchText(event.target.value)}
            />
            <button onClick={() => setLocalSearchText('')}>Clear</button>
        </div>

    )
}

export default ApplicationSearchBar;