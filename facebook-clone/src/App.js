import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from "./Feed";
import Login from "./Login";
import {useStateValue} from './StateProvider';



function App() {
  const [{user},dispatch] = useStateValue();
  
  return (
    //BEM naming converation
    <div className="app">
      {!user ?(
        <Login/>
        ):(
        <>
      <Header/>
      <div className='app__body'>
     <Sidebar/>
     <Feed/>
     </div>
     </>
     )}
    </div>

/* how to comment*/
  );
}

export default App;
