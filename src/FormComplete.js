import React, { useEffect, useState } from 'react'

const FormComplete = () => {

    const initialData = {
        name: '',
        mobile: '',
        email: '',
        city: ''
    }
    const [formdata, setFormdata] = useState(initialData);
    const [status, setStatus] = useState(false);

    const updateData = (e) => {
        console.log(e.target.id, e.target.value);
        let tempObj = {};
        tempObj[e.target.id] = e.target.value;
        setFormdata({
            ...formdata, ...tempObj
        });
    }

    const capitalFn = () => {
        let tempObj = {}
        tempObj.name = formdata.name.toUpperCase();
        setFormdata({
            ...formdata, ...tempObj
        });
    }

    const registerFn = () => {
        // const {name, mobile, email, city} = formdata;
        //alert(`${name} - ${mobile} - ${email} - ${city}`);
        setStatus(true);
        //call api for form submission
    }

    useEffect(() => {
        console.log(formdata);
    })

    return (
        <div>
            Name: <input type="text" id="name" onChange={updateData} value={formdata.name} />
            <button onClick={capitalFn}>Capitalize</button><br></br>
            Mobile: <input type="text" id="mobile" onChange={updateData} value={formdata.mobile}/><br></br>
            Email: <input type="text" id="email" onChange={updateData} value={formdata.email}/><br></br>
            City: <input type="text" id="city" onChange={updateData} value={formdata.city}/><br></br>

            <button onClick={registerFn}>Add this to list</button>

            {status && <div class="alert alert-success" role="alert">
                <h2>Registered</h2>
                Name - <span>{formdata.name}</span>
                Mobile - <span>{formdata.mobile}</span>
                Email - <span>{formdata.email}</span>
                City - <span>{formdata.city}</span>
                </div>}

        </div>
    )
}

export default FormComplete;


// name
// mobile
// email
// city


//Controlled Components(State) and Uncontrolled Components (Ref)

// Stateless Component - Functional Components
// StateFull Component - Class Components

// 16.8  - Hooks - useState