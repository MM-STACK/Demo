import React  from 'react';
import ApplicationSearchBar from './ApplicationSearchBar'
import './ApplicationStyles.css'

 
 
const ApplicationsList = (props) => {
    const applications_details = [...props.data];
 
    return (    
        <>              
            <ApplicationSearchBar 
                Search_Text={props.Search_Text} 
                OnSearchTextChangedHandler={props.OnSearchTextChangedHandler}
            />

             <div className="Applications-List-Box">
                {
                    applications_details.map( (item,index) => (
                    <div 
                        className="Application-Card" 
                        key={item.id} 
                        onClick={() => props.OnClickHandler(item.id-1)}
                    >
                       <div className="Card-Title">{item.title}</div> 
                       <div className="Card-Description">{item.description.substring(0,100)}</div>
                    </div>
                ))
                }
             </div>
       </>
    )
}

export default ApplicationsList;