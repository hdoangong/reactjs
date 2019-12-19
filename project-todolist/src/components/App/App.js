import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Control from '../Control/Control'
import ListTask from '../ListTask/ListTask'

function App() {
    return (
        <div className="container">
            <Header></Header>
            <Control></Control>
            <ListTask></ListTask>
        </div>
       
    );
}

export default App;
