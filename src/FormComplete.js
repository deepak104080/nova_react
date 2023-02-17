import React, { useEffect, useState } from 'react'

const FormComplete = () => {

    const initialData = {
        name: '',
        mobile: '',
        email: '',
        city: '',
    }

    //state object for formdata
    const [formdata, setFormdata] = useState(initialData);

    //state objetc for error data
    const [formerror, setFormerror] = useState({});

    //state variable to check form submission status
    const [status, setStatus] = useState(false);

    //state varibel to store api data response
    const [apiresponse, setApiresponse] = useState({});

    //method to update each key of state object
    const updateData = (e) => {
        console.log(e.target.id, e.target.value);
        let tempObj = {};
        tempObj[e.target.id] = e.target.value.trim();
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

    //methods for form submission button
    const registerFn = () => {
        // const {name, mobile, email, city} = formdata;
        //alert(`${name} - ${mobile} - ${email} - ${city}`);
        const ret = validationFn();
        if(ret) {
            //form submiited
            setStatus(true);
            //call api for form submission - POST - Submit Data - formdata
            callApi();
            //store the response in a state variable
            setFormdata(initialData);
        }
        
    }

    const callApi = () => {
        fetch('url_of_form_data_submission', {
            method: 'POST',
            body: formdata
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //data - {name: '', id: '', mobile: ''}
            setApiresponse(data);
        })
    }

    const validationFn = () => {

        let errorObj = {};
        var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if(formdata.name === '') {
            errorObj.name = 'Name is empty'
        }
        if(formdata.mobile === '') {
            errorObj.mobile = 'Mobile is empty'
        }
        if(formdata.email === '') {
            errorObj.email = 'email is empty'
        }
        if(formdata.city === '') {
            errorObj.city = 'city is empty'
        }
        if(formdata.mobile.length > 10) {
            errorObj.mobile = 'Mobile Length is incorrect'
        }
        if(!emailPattern.test(formdata.email)) {
            errorObj.email = 'Email Format is incorrect'
        }


        // if everything is ok, return true
        // else return false
        // let values = Object.values(errorObj);
        // let errorStatus = false;
        
        // for(let i=0 ; i<Object.values(errorObj).length ;i++) {
        //     if(values[i]!== '') {
        //         errorStatus = true
        //     }
        // }


        //copy errorobj in forerror state variable
        setFormerror(errorObj);  

        // errorObj = {
        //     name: 'error',
        //     mobile: 'error'
        // } - 2
        // errorObj = {} - 0
        
        // if errorObj is not blank
        if(Object.keys(errorObj).length > 0) {
            return false
        }
        else {
            //everything is ok
            return true
        }  
           
    }

    useEffect(() => {
        console.log(formdata);
    })

    return (
        <div>
            Name: <input type="text" id="name" onChange={updateData} value={formdata.name} />
            <button onClick={capitalFn}>Capitalize</button><br></br>
            <div className='text-danger'>{formerror.name}</div>


            Mobile: <input type="text" maxlength="" id="mobile" onChange={updateData} value={formdata.mobile}/><br></br>
            <div className='text-danger'>{formerror.mobile}</div>


            Email: <input type="email" id="email" onChange={updateData} value={formdata.email}/><br></br>
            <div className='text-danger'>{formerror.email}</div>


            City: <input type="text" id="city" onChange={updateData} value={formdata.city}/><br></br>
            <div className='text-danger'>{formerror.city}</div>


            <button onClick={registerFn}>Add this to list</button>

            {status && <div class="alert alert-success" role="alert">
                <h2>Successfully Registered</h2>
                Name - <span>{apiresponse.name}</span>
                Mobile - <span>{apiresponse.mobile}</span>
                Email - <span>{apiresponse.id}</span>
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


//validation
//all input fields should be filled
//data type matching
//length of data - mobile
//PAN - AAAA1111A, aadhaar - 12 digits, ifsc - AAAA0001111, DOB - DD/MM/YYYY - 12TH JAN 2023
//REGEX - Regular Expressions
//Password - Uppercase, lowercase, numbers, special characters


//Formic - library for form handling in React