import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Hello from'./Hello.js';
import EventDemo from './eventsdemo.js';
import StateDemo from './stateDemo.js'; 
import Post from './post.js';

function App() {
  let message = "Hello React Again....";
  const [comments, setComments] = useState([
    "This is comment 1",
    "This is comment 2",
    "This is comment 3",
    "This is comment 4",
    "This is comment 5"
  ]);
  return (
    <div className="App">
      <h2>Hello React</h2>
      <h3>{message}</h3>
      <Hello name="Bhumik"/>
      <EventDemo/>
      <StateDemo/>
      <Post comments={comments}/>
    </div>
  );
}

export default App;
