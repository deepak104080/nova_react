import React, { useEffect, useState } from 'react'

const HookUseEffect = () => {

    const [status, setStatus] = useState(false);
    const [test, setTest] = useState(false);
    console.log('before useEffect.')

    //runs on every re-render
    //componentDidMount + componentDidUpdate
    useEffect(() => {
        console.log('componentDidMount + componentDidUpdate')
    })

    //runds on just first render
    //componentDidMount
    useEffect(() => {
        console.log('componentDidMount')
    }, [])

    //runs on every render where status variable updates
    //componentDidMount + componentDidUpdate (with some condition)
    useEffect(() => {
        console.log('componentDidMount + componentDidUpdate (with status condition)')
    }, [status])

    //runs on every render where status and test variable updates
    //componentDidMount + componentDidUpdate (with some condition)
    useEffect(() => {
        console.log('componentDidMount + componentDidUpdate (with status and test condition)')
    }, [status, test])

    //runs on component unmount
    //componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('componentWillUnmount')
        }
        //cleanup works
        //clearInterval, clearTimeout
    }, [])



    // setTimeout(() => {
    //     console.log('code in set timeout')
    // },5000)
    
    console.log('after useEffect.');

    return (
        <div>
            <h2>Hook Use Effect</h2>
            <button onClick={() => setStatus(true)}>Update Status</button>
            <button onClick={() => setTest(true)}>Update Test</button>
        </div>
    )
}

export default HookUseEffect
