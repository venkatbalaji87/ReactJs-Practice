import React from 'react';
import logo from './logo.svg';
import './App.css';
import GreetReact from './Components/StringPrinting'

function App() {
  return (
    <div className="App">
      
        < GreetReact  name="venkat" />
        < GreetReact  name="Balaji" />
        < GreetReact  name="ManojBalaji!!" />
      
    </div>
  );
}

export default App;
