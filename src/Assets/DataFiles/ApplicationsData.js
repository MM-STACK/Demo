const ApplicationsData=[
    {
        id: 1,
        hidden: false,
        title:"Counter",
        // description:"Simple demonstration of <b>Higher Order Components</b>.<br><br>Code re-usability, two different components executing similar logic based on different events.",
        description:"This application demonstrates implementaion of reusable code when there is a common functional logic among multiple components. In our use case we need to build two components having functionality to increment counter based on different events. Instead of writing incrementor function once per component (twice in total), we would use a higher order component with a function to increment counter and wrap the components with HOC.<br><br>Component #1 would increment count by 1 on \"onClick\" event of a button.<br><br>Component #2 would increment count by 3 on \"onMouseOver\" event of the component.<br><br>Component #3 is the higher order component containing the code to increment the counter.",
        technology: "ReactJS, UseState",
        tags: "HOC (Higher Order Components), State Management",        
        url:"http://localhost:7001",
        prd_url:"/hoc-counter/"
    },
    {
        id: 2,
        hidden: false,
        title:"Appointments",
        description:"To demonstarte state management in simplest form.",
        technology: "MongoDB, Express JS, React, Node JS",      
        url:"http://localhost:7002",  
        prd_url:"/state-management/"        
    },
    {
        id: 3,
        hidden: true,
        title:"Restful API",
        description:"To demonstrate Restful API.",
        technology: "MongoDB, Express JS, React, Node JS, AWS, LAMBDA, Restful API",        
        url:"http://localhost/restful-api/"        
    },
    {
        id: 4,
        hidden: true,
        title:"MERN Stack",
        description:"Ex ipsum aute nulla amet sint et eiusmod fugiat non esse nisi excepteur voluptate deserunt. Deserunt anim irure pariatur consequat qui laboris aliqua voluptate cupidatat pariatur adipisicing dolor in mollit. Minim tempor anim consectetur in aliqua ex elit qui minim ut est. Irure tempor aliqua eiusmod esse culpa enim velit sit commodo qui velit. Ut eiusmod sint sit pariatur eiusmod labore. Fugiat ad irure aliqua eiusmod reprehenderit.",
        technology: "MongoDB, Express JS, React, Node JS",        
        url:"http://localhost:7004/"        
    },
    {
        id: 5,
        hidden: true,
        title:"Application 5 Five Cinquo",
        description:"Fugiat ea occaecat enim exercitation id velit nisi commodo cillum aute excepteur. Laboris Lorem adipisicing velit elit mollit eu excepteur do nisi amet pariatur. Occaecat velit irure non excepteur amet non enim duis id dolor occaecat. Excepteur laboris ipsum ea id consequat reprehenderit voluptate nulla ex commodo incididunt commodo consequat mollit. Quis et esse qui et ipsum laboris sint nulla officia cillum labore. Velit velit dolor magna anim tempor non labore tempor est qui esse nulla. Eiusmod anim enim ea reprehenderit qui irure id.",
        technology: "MongoDB, Express JS, React, Node JS, AWS, LAMBDA, Restful API",
        url:"http://localhost:7005/"        
    },
    {
        id: 6,
        hidden: true,
        title:"Application 6",
        description:"Jest Chai Mocha. dsfjsd flsdj lsj fdklsj gfdsgjfdlkgjdfslkg dfsl sfjklg ldfak gjfdlk jsdfkl gjklajdsalkjgslfkg das;l gdfal.",
        technology: "MongoDB, Express JS, React, Node JS, AWS S3, AWS EC2, AWS LAMBDA",
        url:"http://localhost:7006/"
    },
    {
        id: 7,
        hidden: true,
        title:"Application 7",
        description:"Jest Chai Mocha. dsfjsd flsdj lsj fdklsj gfdsgjfdlkgjdfslkg dfsl sfjklg ldfak gjfdlk jsdfkl gjklajdsalkjgslfkg das;l gdfal.",
        technology: "Angular, React, Vue, Express",
        url:"http://localhost:7006/"
    },
    {
        id: 8,
        hidden: true,
        title:"Application 8",
        description:"Jest Chai Mocha. dsfjsd flsdj lsj fdklsj gfdsgjfdlkgjdfslkg dfsl sfjklg ldfak gjfdlk jsdfkl gjklajdsalkjgslfkg das;l gdfal.",
        technology: "Azure, Jenkins, Oracle",
        url:"http://localhost:7006/"
    },
    {
        id: 9,
        hidden: true,
        title:"Application 9",
        description:"Jest Chai Mocha. dsfjsd flsdj lsj fdklsj gfdsgjfdlkgjdfslkg dfsl sfjklg ldfak gjfdlk jsdfkl gjklajdsalkjgslfkg das;l gdfal.",
        technology: "Azure, Bit Bucket, SQL",
        url:"http://localhost:7006/"
    }
]

export default ApplicationsData;