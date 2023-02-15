import React, {useEffect, useState} from "react";


const StateList = () => {

    let CarArray = ['Tata', 'Hyundai', 'Suzuki', 'Mahindra', 'Honda', 'Scoda', 'Range Rover'];
    // let tempToDoList = [{id: '1', task: 'to do 1', status: true}, {id: '2', task: 'to do 2', status: false}]
    const [cars, setCars] = useState(CarArray); //state variable for list of cars
    const [name, setname] = useState('');   //state variable to store input data

    const addInList = (e) => {
        // console.log('added in list...', e.target);
        let tempArr = [...cars, name];
        setCars(tempArr);
        // console.log(cars);
    }

    useEffect(() => {
        console.log('cars - ', cars);
    }, [cars])

    const saveInState = (e) => {
        // console.log('Typed - ', e.target.value);
        setname(e.target.value);
    }

    return(
        <>
            <h2>State List</h2>
            <ul>
                {
                    cars.map((item, index) => (
                            <li key={item+index}>{item}
                                {/* <button>Delete</button> */}
                            </li>
                        ))
                }
            </ul>
            <div>
                ---------------------------------
            </div>
            <div>
                <input type="text" onChange={saveInState} />

                <button onClick={addInList} >Add this to list</button>
            </div>
        </>
    )
}

export default StateList;


//HW - Create a to do list in React