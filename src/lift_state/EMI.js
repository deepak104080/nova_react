import React, { useEffect, useState } from 'react';
import EMI1 from './EMI1';
import EMI2 from './EMI2';

const EMI = () => {
    const [amount, setAmount] = useState(50000);

    useEffect(() => {
        console.log('amount - ', amount);
    })

    return (
        <div>
            EMI Calculator
            <div className='row'>
                <div className='col-6 bg-danger-subtle'>
                    <EMI1 amountInProps = {amount} setAmountFn = {setAmount}/>
                </div>
                <div className='col-6 bg-success-subtle'>
                    <EMI2/>
                </div>
            </div>
        </div>
    )
}

export default EMI
