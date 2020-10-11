import React from 'react'
import './HomePage.css'
import AWS_Image from '../../Assets/images/AWS-Developer-Associate.png'
//../src/Assets/images/AWS-Developer-Associate.png'

const HomePage = () => {
    const backgroundImage = {  
        
        backgroundImage: "url(" + AWS_Image + ")",
        backgroundPosition: 'left',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',   
        height: "150%",
        width: "150%",        
      }


    return(
        <div className="Main-Content" >            
            <div className="Main-Header-Pane" >    
                <div style={{"minWidth":"40%", "maxWidth":"60%"}}>
                    <div className="Title" >Mahesh P</div>                
                    <span>AWS Certified Developer - Associate</span>                
                </div>             
                <div style={backgroundImage}>&nbsp;</div>
            </div>

            <div className="Main-Details-Pane">
                <div className="Main-Details-Card">
                    <div className="Main-Details-Label">
                       Greetings!
                    </div>

                    <div className="Main-Details-Text">
                        Welcome to my website. My name is Mahesh and I'm a Senior Full Stack Developer based in Toronto, Canada. I enjoy designing and building web applications.                                                                                        
                        <br></br>
                        <br></br>
                        This is a simple <b>ReactJS App</b> running on <b>NodeJS server</b>, hosted on <b>AWS EC2</b> with <b>NGINX</b> web server as reverse proxy.                                        
                        <br></br>
                        <br></br>
                        This website is my sandbox to improve skills as a Developer and also to practice AWS.
                    </div>
                </div>

                <div className="Main-Details-Card">
                    <div className="Main-Details-Label">
                        Certifications / Achievements:
                    </div>
                    <div className="Main-Details-Text">    
                        <div className="Main-Details-Box">
                            <div style={{"paddingLeft":"15px"}}>
                                <a href="https://www.youracclaim.com/badges/1b9055d1-8ccf-44b7-8d70-5eb465964ca8/public_url" target="_new">AWS Certified Developer - Associate</a>                            
                            </div>
                            <div>
                                Validity: Sep/05/2020 to Sep/05/2023
                            </div>
                        </div>
                    </div>

                    <div className="Main-Details-Label">
                        Main Technology Stack I work on:
                    </div>
                    <div className="Main-Details-Text">
                        AWS, JavaScript, NodeJS, ExpressJS, ReactJS, Restful API, JQuery, RDBMS, SQL
                        <br></br>
                        Learning Phase: GraphQL, Python
                        <br></br>
                        <br></br>
                        As much as I like JavaScript and associated frameworks. My new found interest is Amazon Web Services. 
                        My favorite AWS service is Cloudformation aka Infrastructure as code and being a developer I am excited to explore AWS Serverless services such as Amazon API Gateway, AWS Lambda, Amazon DynamoDB (NoSql) and AWS Step functions to orchestrate CI/CD (continuous integration and continuous delivery).
                        {/* Just imagine the freedom for developers to focus on their core product without worrying about servers. */}
                    </div>
                    <div className="Main-Details-Label">
                        What's next ?
                    </div>
                    <div className="Main-Details-Text">
                        To achieve AWS Certified DevOps Engineer Professional certification by Jun / 2021 and eventually become AWS Solutions Architect certified.
                    </div>
                </div>

                <div className="Main-Details-Card">
                    <div className="Main-Details-Label">
                        Hobbies:
                    </div>
                    <div className="Main-Details-Text">
                        <ul>
                            <li>
                                Driving - I enjoy going on long drives once in a while. I find it relaxing and depending on the day and weather I might go for drives anywhere from two to six hours one way.
                            </li>
                            <li>
                                Photography - I own a Canon Rebel EOS camera with zoom lens and micro lens. But, I have not used it to full extent other than taking some amateure pictures for now. 
                            </li>                    
                        </ul>                    
                    </div>                
                </div>
            </div>


        </div>
    )
}

export default HomePage;