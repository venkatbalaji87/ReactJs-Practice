import React from 'react';
import logo from './logo.svg';
import './App.css';
import GreetReact from './Components/StringPrinting'
import Title from './Components/Message'

function App() {
  return (
    <div className="App">
      <Title />
        {/* <GreetReact  name="venkat" >
          <button>Action</button>
        </ GreetReact>
        < GreetReact  name="Balaji" >
           <p>Just check with the children.</p>
          </ GreetReact>
        < GreetReact  name="ManojBalaji!!" /> */}
      
    </div>
  );
}

export default App;
