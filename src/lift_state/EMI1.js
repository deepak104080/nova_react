import React from 'react'

const EMI1 = (props) => {
    //console.log(props.amountInProps, props.setAmountFn);

    //const {amountInProps, setAmountFn} = props
    return (
        <div>
            EMI1 - Child Component
            <br></br>
            Amount - {props.amountInProps}
            <br></br>
            <input type="number" onBlur={(e) => props.setAmountFn(e.target.value)} />
        </div>
    )
}

export default EMI1
