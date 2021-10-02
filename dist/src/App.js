import React from 'react';
import { Route } from 'react-router';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar'


function App() {
  return (
    <div >
      <Navbar/>
      <Route exact path="/home" >
        <Home/>
      </Route>
      <Route exact path='/Movies'>
        
      </Route>

      
    </div>
  );
}

export default App;
