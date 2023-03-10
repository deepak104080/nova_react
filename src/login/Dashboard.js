import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const {state} = useLocation();
    console.log(state);
    return (
        <div>
            <h2>Dashboard</h2>
            <h3>{state.userid}</h3>
            <h3>{state.username}</h3>
        </div>
    )
}

export default Dashboard
