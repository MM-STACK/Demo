import React , {useState, useEffect } from 'react';
import ApplicationSearchBar from './ApplicationSearchBar'

const ApplicationsList = (props) => {
   
    const [fetch_data,setDataInitialized]=useState(true);
    const [applications_details,setApplicationData]=useState([]);
    const [search_text,setSearchText]=useState('');
    
    useEffect(
        () => {
            const initializeDataSet = async () => {
                if (fetch_data) {
                    await setDataInitialized(false);
                    setApplicationData(props.data);
                } else {
                    if(search_text.length > 2) {
                        const d = [...applications_details];
                        setApplicationData(d.filter(item => String(item.technology).toLowerCase().includes(search_text.toLowerCase()) ))
                    } else {
                        setApplicationData(props.data);
                    }                
                }
            } 
           
            initializeDataSet();
       
        },[search_text]
    )
         
    return (    
        <>  
            <ApplicationSearchBar 
                Search_Text={search_text} 
                OnChangeHandler={setSearchText} />
       
             <div className="Applications-List-Box">
                {
                    applications_details.map( (item,index) => (
                    <div 
                        className="Application-Card" 
                        key={item.id} 
                        onClick={() => props.OnClickHandler(item.id-1)}
                    >
                       <div className="Title">{item.title}</div> 
                       <div className="Description">{item.description.substring(0,100)}</div>
                    </div>
                ))
                }
             </div>
       </>
    )
}

export default ApplicationsList;