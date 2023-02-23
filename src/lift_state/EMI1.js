import React from 'react'

const EMI1 = (props) => {
    //console.log(props.pricipalInProps, props.setPrincipalFn);

    const {pricipalInProps, setPrincipalFn, yearInProps , setYearInProps, rateInProps , setRateInProps } = props
    return (
        <div>
            Enter your inputs here
            <br></br>
            {/* Principal - {props.pricipalInProps}
            <br></br> */}
            Principal - <input type="number" onChange={(e) => props.setPrincipalFn(e.target.value)} />
            <br></br>
            {/* Year - {yearInProps}
            <br></br> */}
            Year - <input type="number" onChange={(e) => setYearInProps(e.target.value)} />
            <br></br>
            {/* Rate - {rateInProps}
            <br></br> */}
            Rate - <input type="number" onChange={(e) => setRateInProps(e.target.value)} />
        </div>
    )
}

export default EMI1
