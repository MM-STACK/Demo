const ApplicationsData=[{
        id: 1,
        hidden: false,
        title:"Product Reviews (MERN Full Stack)",
        description:"To demonstrate a sample of Full stack application.",
        technology: "MongoDB, Express JS, React JS, Node JS (MERN)",        
        tags: "MERN, React Hooks, useState, useEffect, API, Full Stack",
        dev_url:"http://localhost:8000/",
        prd_url:"/product-reviews/"
    },
    {
        id: 2,
        hidden: false,
        title:"Counter",
        // description:"Simple demonstration of <b>Higher Order Components</b>.<br><br>Code re-usability, two different components executing similar logic based on different events.",
        description:"This application demonstrates implementaion of reusable code when there is a common functional logic among multiple components. In our use case we need to build two components having functionality to increment counter based on different events. Instead of writing incrementor function once per component (twice in total), we would use a higher order component with a function to increment counter and wrap the components with HOC.<br><br>Component #1 would increment count by 1 on \"onClick\" event of a button.<br><br>Component #2 would increment count by 3 on \"onMouseOver\" event of the component.<br><br>Component #3 is the higher order component containing the code to increment the counter.",
        technology: "React JS",
        tags: "HOC (Higher Order Components), State Management",        
        dev_url:"http://localhost:7001",
        prd_url:"/counter/"
    },
    {
        id: 3,
        hidden: false,
        title:"Appointments",
        description:"To demonstarte state management in simplest form.",
        technology: "React JS",      
        tags: "State Management, Life Cycle Hooks",        
        dev_url:"http://localhost:7002",  
        prd_url:"/appointments/"        
    },
    {
        id: 4,
        hidden: true,
        title:"Restful API",
        description:"To demonstrate Restful API.",
        technology: "MongoDB, Express JS, React, Node JS, AWS, LAMBDA, Restful API",        
        dev_url:"http://localhost/restful-api/"        
    }
]

export default ApplicationsData;