import React, { useState } from 'react'

const ShowHide = () => {
    const [show, setShow] = useState(false);
    const [day, setDay] = useState(true);

    const showFn = () => {
        setShow(true);
    }

    const hideFn = () => {
        setShow(false);
    }


    const toggleFn = () => {
        setShow(show => !show);
    }

    const showhidefn = () => {

    }


    const toggleDayFn = () => {
        setDay(!day);
    }

    return (
        <>  
            <div>Approach 1</div>
            <button onClick={showFn}>Show</button>
            <br></br>
            <button onClick={hideFn}>Hide</button>
            {show && <h2>Hidden Data</h2>}

            <div>--------------------------------------</div>
            
            <div>Approach 2</div>
            <button onClick={toggleFn}>Show 2</button>
            <br></br>
            <button onClick={toggleFn}>Hide 2</button>
            {show && <h2>Hidden Data 2</h2>}


            <div>--------------------------------------</div>
            
            <div>Approach 3</div>
            <button onClick={showhidefn}>Show / Hide</button>
            {show && <h2>Hidden Data 3</h2>}
            {/* complete it */}




            <div>--------------------------------------</div>
            Ternary operator
            <button onClick={toggleDayFn}>Day Time</button>
            <br></br>
            <button onClick={toggleDayFn}>Night Time</button>
            {day ? <h2>Its LunchTime</h2> : <h2>Its Dinner Time 2</h2>}
        </>
    )
}

export default ShowHide
