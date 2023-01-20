import React, {Component, useState} from "react";
let count = 0;

const StateRepeat = () => {
    const [counter, setCounter] = useState(0);
    //useState is a hook - inbuilt method from react
    //destructuring
    //counter will be that state variable
    //setCounter is a function to update the state variable
    //we can not modify the value of counter or setcounter directly
    //parameter of useState defines the data type of state varibale and the default value of state varibale
    //names can be anything
    //function works in async approach
    //set method triggers re-rendering of component


    const increaseFn = () => {
        console.log('Increase Fn working......')
        setCounter(counter => counter + 1);
        console.log('count', counter);
    }

    const decreaseFn = () => {
        console.log('Decrease Fn working......')
        setCounter(counter => counter - 1);
        console.log('count', counter)
    }

    return(
        <>
            State Componnet
            <div>{counter}</div>

            <br></br>
            <button onClick={increaseFn}>Increase</button>
            <button onClick={decreaseFn}>Decrease</button>
        </>
    )
}

export default StateRepeat;



// when there is any update in any state or props data

// state                   vs                  props
// inside Component                            parent to childcomponnet
// data Storage                                data transfer
// update the value of state var/mutable       cant' update props values / immutable
// read and write                              read only