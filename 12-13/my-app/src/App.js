import './App.css';
import { useState } from 'react';
import Hello from './Hello/Hello.js';
import EventDemo from './EventsDemo/eventsdemo.js';
import StateDemo from './StateDemo/stateDemo.js';
import Post from './Posts/post.js';
import ListAndKeysComponent from './ListnKeys/ListAndKeysComponent.js';
import AxiosDem from './AxiosDemo/axiosGetDemo.js';
import Navbar from './Navbar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToDoList from './todolist/ToDoList.js';
import AxiosDisp from './AxiosCrudOps/AxiosDisplay.js';

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
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/Hello' element={<Hello name ="Bhumik"/>} />
          <Route path='/stateDemo' element={<StateDemo />} />
          <Route path='/posts' element={<Post comments={comments}/>} />
          <Route path='/ToDoList' element={<ToDoList/>} />
          <Route path='/eventsDemo' element={<EventDemo/>} />
          <Route path='/ListnKeys/ListAndKeysComponent' element={<ListAndKeysComponent/>} />
          <Route path='/AxiosDemo/axiosgetDemo' element={<AxiosDem/>} />
          <Route path='/AxiosCrudOps/AxiosDisplay' element={<AxiosDisp/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
