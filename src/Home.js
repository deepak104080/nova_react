import React, { useContext } from "react";
import {DataAppContext} from './DataApp';

function Home1111() {
    const localGlobalContext = useContext(DataAppContext);
    let name  = 'Newton School';
    return (
        <div className="App">
            <header className="App-header">
                <p>React Project - Nova Batch 123</p>
                <br></br>
                <div>name</div>
                <br></br>
                <br></br>
                <div>{localGlobalContext.appState.loginStatus && <h2>Yeahhh. I am logged in.</h2>}</div>
            </header>
        </div>
    );
}


function Home2() {
    return (
        <div></div>
      );
}

function Home3() {
    return (
        <div></div>
      );
}

export default Home1111;
export {Home2, Home3};



// export - 
// Default Export
// Non-Default Export
