import React from 'react';
import './TombStone.css';
import AWS_Image from '../../Assets/images/AWS-Developer-Associate.png';




const tombStone = (props) => {


    // console.log('Navigation Items')

    const backgroundImage = {          
        backgroundImage: "url(" + AWS_Image + ")",
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',   
        height: "100%",
        width: "50px",        
    }

      return (        
        <div className="TombStone-Pane">          
            <div alt="" title="AWS Certified Developer - Associate" style={backgroundImage}>&nbsp;</div>      

            <div>
                <span>Mahesh Pantangi</span>                
                {/* <span className="SmallText">AWS Certified Developer - Associate</span> */}
                <span className="SmallText">Senior Full Stack Developer</span>
            </div>                
        </div> 
    )
}

export default tombStone;