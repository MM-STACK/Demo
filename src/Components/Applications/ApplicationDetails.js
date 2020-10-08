import React from 'react';

const ApplicationDetails = (props) => {


    const OpenApplication = (url) => {
        alert(url);
        return;
        // window.open(url);
    }

    return(
        <div className="Application-Details">
            <p className="Title">Application: {props.data.title}</p>
            <button className="Button"
               onClick={() => OpenApplication(props.data.url)}  >OPEN</button> 
            <br/>
            <p>Technology Stack:</p>
            <div>{props.data.technology}</div>
            <p>Details:</p>
            <div>{props.data.description}</div>            
        </div>
    )

}



export default ApplicationDetails;