import React, { useEffect, useState } from 'react';
import EMI1 from './EMI1';
import EMI2 from './EMI2';

const EMI = () => {
    const [principal, setPrincipal] = useState(0);
    const [year, setYear] = useState(0);
    const [rate, setRate] = useState(0);

    useEffect(() => {
        console.log('data - ', principal, year, rate);
    })

    return (
        <div>
            EMI Calculator
            <div className='row'>
                <div className='col-6 bg-danger-subtle'>
                    <EMI1 pricipalInProps = {principal} setPrincipalFn = {setPrincipal} 
                    yearInProps = {year} setYearInProps = {setYear} rateInProps = {rate} setRateInProps = {setRate}/>
                </div>
                <div className='col-6 bg-success-subtle'>
                    <EMI2 pricipalInProps = {principal} yearInProps = {year} rateInProps = {rate}/>
                </div>
            </div>
        </div>
    )
}

export default EMI
