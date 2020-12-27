import React, { useEffect, useState }  from 'react';

import './ApplicationsPage.css'

import ApplicationsList from '../../Components/Applications/ApplicaitonsList';
import ApplicationDetails from '../../Components/Applications/ApplicationDetails';
import ApplicationsData from '../../Assets/DataFiles/ApplicationsData';


const ApplicationsPage = () => {
    
    const [Application_Selected_ID,setApplicationID]=useState(0);
    const [Filtered_Data,setApplicationsData]=useState([]);
    const [Search_Text,setSearchText]=useState('');

    useEffect(()=>{
        if(Search_Text==='' || Search_Text.length < 3 ) {
            setApplicationsData([...ApplicationsData])
        } else {
            const d = [...ApplicationsData];
            const fa = d.filter(item => String(item.technology).toLowerCase().includes(Search_Text.toLowerCase()) || String(item.tags).toLowerCase().includes(Search_Text.toLowerCase()) )
            setApplicationsData(fa)
            if (fa.length) {
                setApplicationID(fa[0].id-1)
            } else {
                setApplicationID(0)
            }
            
        }
    },[Search_Text])

    return (
        <div className="Applications-Tab-Container">
            <div className="Applications-List-Container">
                <ApplicationsList  
                    data={Filtered_Data} 
                    Search_Text= {Search_Text}
                    OnSearchTextChangedHandler = {setSearchText}
                    OnClickHandler={setApplicationID} 
             />
            </div>
            
            <div className="Applications-Details-Container">
                <ApplicationDetails 
                    data={ ApplicationsData[Application_Selected_ID]}
                />
            </div> 
        </div>
    )
}



export default ApplicationsPage;