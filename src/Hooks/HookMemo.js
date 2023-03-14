import React, { useState, useMemo } from 'react'

const HookMemo = () => {

    const initialCars = ['Maruti', 'Toyota', 'Honda', 'Kia', 'Hyundai', 'Tata', 'BMW'];

    const [cars, setCars] = useState(initialCars);
    const [temp, setTemp] = useState(false);    //just to check extra render of list


    const addCarFn = (e) => {
        console.log('new car to be added - ', e.target.value);
        setCars([...cars, e.target.value])
    }

    const displayCars = (cars) => {
        console.log('=========Unwanted rendered again=============')
        return (
            <>
                {
                    cars && cars.map((item, index) => (
                        <div>{item}</div>
                    ))
                }
            </>
        )
    }

    const renderCars = useMemo(() => displayCars(cars), [cars])

    return (
        <div>
            <div>
                {/* {
                    cars && cars.map((item, index) => (
                        <div>{item}</div>
                    ))
                } */}

                {
                    // displayCars(cars)
                    renderCars
                }
            </div>
            <br></br>
            <div>
                <input type="text" onBlur={(e) => addCarFn(e)} />
            </div>
            <br></br>
            <div>
                <button onClick={() => setTemp(!temp)}>Test Extra Render</button>
            </div>
            
        </div>
    )
}

export default HookMemo
