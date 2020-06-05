import React from 'react';
import Main from './Components/Main/Main';
import Add from './Components/Add/Add';
import {Route,Switch} from 'react-router-dom'
import Create from './Components/Create/Create';
import './App.css';
import Header from "./Components/Header/Header";
import Korzina from "./Components/Korzina/Korzina";
import Delete from './Components/Delete/Delete';

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/admin/add" component={Add}/>
            <Route path="/create/:id"  component={Create}/>
            <Route path="/korzina" component={Korzina}/>
            <Route path="/delete:id" component={Delete}/>
        </Switch>
    </div>
  );
}

export default App;
