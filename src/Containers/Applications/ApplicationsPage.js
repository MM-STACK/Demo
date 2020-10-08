import React, { useState } from 'react';

import './ApplicationsPage.css'

import ApplicationsList from '../../Components/Applications/ApplicaitonsList';
import ApplicationDetails from '../../Components/Applications/ApplicationDetails';
import ApplicationsData from '../../Assets/ApplicationsData';


const ApplicationsPage = () => {
    const [Application_Selected_Index,SetApplicationIndex]=useState(0)
    


    return (
        <div className="Applications-Tab-Container">
            <div className="Applications-List-Container">
                <ApplicationsList  data={ApplicationsData} OnClickHandler={SetApplicationIndex} />
            </div>
            <div className="Applications-Details-Container">
                <ApplicationDetails data={ApplicationsData[Application_Selected_Index]}/>
            </div>
        </div>
    )
}



export default ApplicationsPage;