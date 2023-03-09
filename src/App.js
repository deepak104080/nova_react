import React, { Component, useState } from "react";
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
import HookUseEffect from "./Hooks/HookUseEffect";
import APIwithUseEffect from "./APIwithUseEffect";
import Form from "./Form";
import FormComplete from "./FormComplete";
import EMI from "./lift_state/EMI";
import ParentProps from "./propsdrilling/ParentProps";
import ParentContext from "./context/ParentContext";
import HookUseReducer from "./Hooks/HookUseReducer";
import RefFn from "./ref/RefFn";
import RefClass from "./ref/RefClass";
import Portal from "./modal/Portal";

import Header from "./template/Header";
import Footer from "./template/Footer";
import LeftSideBar from "./template/LeftSideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataApp, {DataAppContext} from "./DataApp";

function App() {
    let name  = 'Newton School';
    let dataToBeSentToChild = 'Data from Parent to Child';

    return (
        <>
            <BrowserRouter>
                <DataApp>
                        <Header/>
                        <MenuBar/>
                        <div className="row bg-warning-subtle">
                            <LeftSideBar/>
                            
                            <div className="col-9 bg-info-subtle">
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
                                <Route path='/hookuseeffect' element={<HookUseEffect/>}/>
                                <Route path='/api' element={<APIwithUseEffect/>}/>
                                <Route path='/form' element={<Form/>}/>
                                <Route path='/formcomplete' element={<FormComplete/>}/>
                                <Route path='/emi' element={<EMI/>}/>
                                <Route path='/parentprops' element={<ParentProps/>}/>
                                <Route path='/parentcontext' element={<ParentContext/>}/>
                                <Route path='/hookusereducer' element={<HookUseReducer/>}/>
                                <Route path='/reffn' element={<RefFn/>}/>
                                <Route path='/refclass' element={<RefClass/>}/>
                                <Route path='/portal' element={<Portal/>}/>

                                <Route path='/' element={<HomePage/>}/>
                                <Route path='/*' element={<NotFound/>}/>
                            </Routes>
                            </div>
                        </div>
                        <Footer/>
                </DataApp>
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