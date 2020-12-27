import React from 'react';

const ApplicationDetails = (props) => {


    const OpenApplication = (data) => {
        if (process.env.NODE_ENV==='Production') {
            window.open(data.prd_url);
        } else {
            window.open(data.url);
        }
        // alert(url);
        // return;
        
    }

    return(
        <div className="Application-Details">
            <p className="Title">Application: {props.data.title}</p>
            <button className="Button"
               onClick={() => OpenApplication(props.data)}  >OPEN</button> 
            <br/>
            <p>Technology:</p>
            <div>{props.data.technology}</div>
            <p>Tags:</p>
            <div>{props.data.tags}</div>
            <p>About:</p>
            {/* <div className="Text">{props.data.description}</div>         */}
            <div dangerouslySetInnerHTML={{__html:props.data.description}}  ></div>  
        </div>
    )

}



export default ApplicationDetails;