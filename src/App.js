import React from 'react';
import './App.css';
import About from './About'
import Home from './Home'
import CodeSnippets from './CodeSnippets'
import Navbar from './Navbar'

import {
  Route, 
  Switch
} from 'react-router-dom'

function App() {
  return (
    <header>
       <Navbar />

        {/* Create the routes. This will not appear on the page. */}
       <div className="main">
           <Switch>
               <Route path="/about" component={ About } />
               <Route path="/home" component={ Home } />
               <Route path="/code-snippets" component={ CodeSnippets } />
           </Switch>
       </div>
   </header>
  );
}

export default App;
