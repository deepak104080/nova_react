import React, { useEffect, useState } from 'react'

const Form = () => {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');

    const updateName = (e) => {
        setName(e.target.value)
    }
    const updateMobile = (e) => {
        setMobile(e.target.value)
    }
    const updateEmail = (e) => {
        setEmail(e.target.value)
    }
    const updateCity = (e) => {
        setCity(e.target.value)
    }

    const registerFn = () => {
        alert(`${name} - ${mobile} - ${email} - ${city}`);
        //call api for form submission
    }

    useEffect(() => {
        console.log('Name - ', name, 'Mobile - ', mobile, 'Email - ', email, 'City - ', city);
    })

    return (
        <div>
            Name: <input type="text" onChange={updateName}/><br></br>
            Mobile: <input type="text" onChange={updateMobile}/><br></br>
            Email: <input type="text" onChange={updateEmail} /><br></br>
            City: <input type="text" onChange={updateCity} /><br></br>

            <button onClick={registerFn}>Add this to list</button>

        </div>
    )
}

export default Form


// name
// mobile
// email
// city


//Controlled Components(State) and Uncontrolled Components (Ref)