import React, {useState} from "react";


const State123 = () => {

    const [counter, setCounter] = useState(0);
    //useState is a hook - inbuilt method from react
    //destructuring
    //we can not modify the value of counter or setcounter directly
    //counter will be that state variable
    //setCounter is a function to update the state variable
    //parameter of useState defines the data type of state varibale and the default value of state varibale
    //names can be anything
    //function works in async approach

    const increaseFn = () => {
        console.log('value increased....')
        // counter = counter + 1;
        setCounter((counter) => counter + 1);
    }

    const decreaseFn = () => {
        console.log('value decreased....')
        // counter = counter - 1;
        setCounter((counter) => counter - 1);
    }

    return(
        <>
                State Component
                <br></br>
                <div>Count = {counter}</div>
                <br></br>
                <button className="btn btn-primary" onClick={increaseFn}>Increase</button>
                <br></br>
                <button className="btn btn-success" onClick={decreaseFn}>Decrease</button>
        </>
    )
}

export default State123




// useState - Hook