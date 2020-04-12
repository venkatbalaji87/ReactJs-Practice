import React from 'react';

// function GreetReact() {
//     return <h1>Hello Venkat </h1>
// }

const GreetReact = (props) => {
    console.log(props)
     return ( 
        <div> 
       <h1> Hello {props.name} </h1>
        {props.children}
       </div>
       )
    }
export default GreetReact;