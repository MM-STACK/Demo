import React from 'react'
import './HomePage.css'
// import AWS_Image from '../../Assets/images/AWS-Developer-Associate.png'

const HomePage = (props) => {
    return(
        <div className="Main-Content" >                       
            <div className="Main-Details-Flex-Box">
                    <div className="Main-Details-Item">
                        <div className="Main-Details-Label">
                            Greetings!
                        </div>
                        <div className="Main-Details-Text"> 
                                <p>My name is <b>Mahesh</b> and I'm a <b>Senior Full Stack Developer</b> based in Toronto, Canada. I enjoy designing and building web applications.</p>
                                <p>
                                    I am a AWS Certified Developer (Associate certification) and continuously upscaling my skill sets by practicing deployment of web applications on AWS EC2 and by exploring AWS Serverless services such as 
                                    Amazon API Gateway, AWS Lambda, Amazon DynamoDB (NoSql) and AWS Step functions to orchestrate CI/CD.
                                </p> 

                        </div>
                    </div>

                    <div className="Main-Details-Item">
                        <div className="Main-Details-Label">
                            Technology Stack
                        </div>
                        <div className="Main-Details-Text">                            
                            <ul className="Technology-Stack">
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                                <li>ReactJS</li>
                                <li>JavaScript</li>
                                <li>Restful API</li>
                                <li>NGINX</li>
                                <li>JQuery</li>
                                <li>Kendo UI</li>
                                <li>AWS</li>
                                <li>MS SQL</li>
                                <li>MongoDB</li>                                
                                <li>GraphQL</li>
                                {/* <li>Lotus Script</li>                                 */}
                            </ul>
                        </div>

                        <div className="Main-Details-Label">
                            About this website
                        </div>

                        <div className="Main-Details-Text">
                            <p><b>ReactJS App</b> hosted on <b>AWS EC2</b> with <b>NGINX</b> web server. </p>
                            <p>Please click on "<a href="/Applications">Applications</a>" tab to see the list of web applications I have built to demonstrate applied design patterns in buidling web applications.</p>
                        </div>
                    </div>   

                    <div className="Main-Details-Item">
                        <div className="Main-Details-Label">
                            Hobbies
                        </div>
                        <div className="Main-Details-Text">
                            <ul>
                                <li>
                                    Driving - I enjoy going on long drives once in a while.
                                </li>
                                <li>
                                    Photography
                                </li>                    
                            </ul>                    
                        </div>                         
                    </div>

                    <div className="Main-Details-Item">
                        <div className="Main-Details-Label">
                            Certifications / Achievements
                        </div>
                        <div className="Main-Details-Text">    
                            <div className="Main-Details-Box">
                                <div style={{"display": "inline-flex", "marginRight":"15px"}}>
                                    <a href="https://www.youracclaim.com/badges/1b9055d1-8ccf-44b7-8d70-5eb465964ca8/public_url" target="_new">AWS Certified Developer - Associate</a>
                                    <br/>                                    
                                </div>
                                <div style={{"display": "inline-flex" }}>
                                    valid from Sep/05/2020 to Sep/05/2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default HomePage;