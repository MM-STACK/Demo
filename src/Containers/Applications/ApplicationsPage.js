import React, { useState, useEffect }  from 'react';

import './ApplicationsPage.css'

import ApplicationsList from '../../Components/Applications/ApplicaitonsList';
import ApplicationDetails from '../../Components/Applications/ApplicationDetails';
import ApplicationsData from '../../Assets/DataFiles/ApplicationsData';


const ApplicationsPage = (props) => {
   
    const [filteredData,setApplicationsData]=useState([]);
    const [applicationSelId,setApplicationId]=useState(0);
    const [searchText,setSearchText]=useState('');    

    useEffect(()=>{
        if(searchText==='' ) {
            setApplicationsData([...ApplicationsData])
        } else {
            const d = [...ApplicationsData];
            const fa = d.filter(item => String(item.technology).toLowerCase().includes(searchText.toLowerCase()) || String(item.tags).toLowerCase().includes(searchText.toLowerCase()) )

            setApplicationsData(fa)
            if (fa.length) {
                setApplicationId(fa[0].id-1)
            } else {
                setApplicationId(0)
            }
            
        }
    },[searchText])
    

    return (
        <div className="Applications-Tab-Container">
            <div className="Applications-List-Container">
                <ApplicationsList  
                    data={filteredData} 
                    searchText= {searchText}
                    OnSearchTextChangedHandler = {setSearchText}
                    OnClickHandler={setApplicationId} 
             />
            </div>
            
            <div className="Applications-Details-Container">
                <ApplicationDetails 
                    data={ ApplicationsData[applicationSelId]}
                />
            </div> 
        </div>
    )




}



export default ApplicationsPage;