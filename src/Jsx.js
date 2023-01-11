import React, {Fragment} from 'react';

function Jsx() {
    let name = 'NS';
    let num1 = 5;
    let num2 = 6;
    return(
        <>
            <span>My first component.</span>
            <span>{name}</span>
            <span>Sum = {num1+num2}</span>
        </>

/* <Fragment>
<span>My first component.</span>
<span>{name}</span>
</Fragment> */
    )
}

export default Jsx;



// function test() {
//     let a = 5;
//     return a;
//     return a;
//     return a;
// }

