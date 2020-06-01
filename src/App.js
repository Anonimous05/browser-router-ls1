import React from 'react';
import Main from './Components/Main/Main';
import Add from './Components/Add/Add';
import {Route,Switch} from 'react-router-dom'
import Create from './Components/Create/Create';
import './App.css';
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/add" exact component={Add}/>
            <Route path="/create/:id"  component={Create}/>
        </Switch>
    </div>
  );
}

export default App;
