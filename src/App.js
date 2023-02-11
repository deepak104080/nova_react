import React, { Component } from "react";
import Home1111 from './Home';
import Jsx from './Jsx';
import Bootstrap from './Bootstrap';
import BootstrapReact from './BootstrapReact';
import State123 from './State';
import StateRepeat from './StateRepeat';
import ShowHide from './ShowHide';
import StateList from './StateList';
import Parent from './collection/Parent';
import HomePage from './template/HomePage';
import NotFound from "./NotFound";
import MenuBar from './MenuBar';

import ClassComp from "./ClassComp";
import LifeCycle from "./LifeCycle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    let name  = 'Newton School';
    let dataToBeSentToChild = 'Data from Parent to Child';

    return (
        <>
        <BrowserRouter>
            <MenuBar/>
            <Routes>
                <Route path='/home111' element={<Home1111/>}/>
                <Route path='/jsx' element={<Jsx/>}/>
                <Route path='/bootstrap' element={<Bootstrap/>}/>
                <Route path='/bootstrapreact' element={<BootstrapReact/>}/>
                <Route path='/state123' element={<State123/>}/>
                <Route path='/staterepeat' element={<StateRepeat/>}/>
                <Route path='/showhide' element={<ShowHide/>}/>
                <Route path='/statelist' element={<StateList/>}/>
                <Route path='/parent' element={<Parent/>}/>
                <Route path='/homepage' element={<HomePage/>}/>
                <Route path='/class' element={<ClassComp testkey="test value"/>}/>
                <Route path='/lifecycle' element={<LifeCycle/>}/>



                <Route path='/' element={<HomePage/>}/>
                <Route path='/*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>

        {/* <Jsx dataKey = {dataToBeSentToChild} dataKey2 = "12345" status={true}/>
        <div className="App">
            <header className="App-header">
                <p>React Project - Nova Batch 123</p>
                <br></br>
                <div>Name - {name}</div>
            </header>
        </div> */}
        </>
    );
}

export default App;


// Templating - Displaying HTML with dynamic data
// -- 3rd party libraries for handling templating
// -- JSX - JS + HTML


// JSX - JavaScript XML - JS + HTML
// variables
// if else - Conditionals in React
// looping mechanism - Looping in React

// .js, .jsx, .ts, .tsx - React components

// let name = 'test';
// console.log(`my name is -  ${name}`);


// Routing



// App - Parent Component
// Jsx - Child Component

// Props (Object) - way of data transfer from* parent to child
// State  - 