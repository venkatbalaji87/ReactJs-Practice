import React, { useState } from "react";


//Content change on button click
const Title = () => {
   const [title, setTitle] = useState("Mention me");

   return (
    <div>
   <h1>{title}</h1>;
   <button onClick={() => setTitle("New title")}>ClickMe</button>
   </div>
   )
}

export default  Title;