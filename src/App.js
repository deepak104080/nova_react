import React, { Component } from "react";
import Jsx from "./Jsx";

function App() {
    let name  = 'Newton School';
    let dataToBeSentToChild = 'Data from Parent to Child';

    return (
        <>
        <Jsx dataKey = {dataToBeSentToChild} dataKey2 = "12345" status={true}/>
        <div className="App">
            <header className="App-header">
                <p>React Project - Nova Batch 123</p>
                <br></br>
                <div>Name - {name}</div>
            </header>
        </div>
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