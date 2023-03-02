import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap';
import RefFnChild from './RefFnChild';

const RefFn = () => {
    const inputref1 = useRef();
    const inputref2 = useRef();
    const outRef1 = useRef();
    const childRef1 = useRef();

    const [data, setData] = useState({});

    const submitFn = () => {
        //we need name and city
        console.log(inputref1.current.value);
        console.log(inputref2.current.value);
        let name = inputref1.current.value;
        let city = inputref2.current.value;
        // validate(name, city);
        let obj = {
            name: inputref1.current.value,
            city: inputref2.current.value
        }
        setData(obj);
        outRef1.current.innerHTML = `My name is ${name} and I live in ${city}`;
        childRef1.current.innerHTML = `My name is ${name} and I live in ${city} - This is Child Ref`;
    }

    useEffect(() => {
        console.log(inputref1.current.value);
        console.log(inputref2.current.value);
    })

    return (
        <div>
            <div>
                Name - <input type="text" ref={inputref1} /><br></br>
                City - <input type="text" ref={inputref2} /><br></br>
                <button onClick={submitFn}>Submit</button>
                <br></br>
                <h2>FormData - </h2>
                <span ref={outRef1}></span>
                <br></br>
                <br></br>
                <RefFnChild ref={childRef1}/>
            </div>
        </div>
    )
}

export default RefFn



// React.createRef() - useRef()

// Uncontrolled Form
