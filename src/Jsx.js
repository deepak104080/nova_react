import React, {Fragment, useEffect} from 'react';
import './App.css';
import imageBg from './assets/images/image1.png';

function Jsx(props) {
    console.log('Props Dataa - ', props);
    const {dataKey} = props;
    let name = 'NS';
    let num1 = 5;
    let num2 = 6;

    let status = 0;
    let statusElse = false;

    let CarArray = ['Tata', 'Hyundai', 'Suzuki', 'Mahindra', 'Honda', 'Scoda', 'Range Rover'];
    let CarArray2 = [{name: 'Tata'}, {name: 'Hyundai'}, {name: 'Suzuki'}, {name: 'Mahindra'}];

    return(
        <>
            <div style={{'background': '#ff0000'}}>My first component.</div>
            <div>Props Data - {props.dataKey} </div>
            <div>Props Data - {dataKey} </div>
            <span>{name}</span>
            <span>Sum = {num1+num2}</span>

            {(status + 5 === 0) && (<div>If condition is true</div>)}

            {
                (statusElse) ? (<div>True Part</div>) : (<div>False Part</div>) 
            }

            <div>List of Car Companies</div>
            <ul id="list">
                
                {
                    CarArray.map((temp, index) => (
                        <li key={temp+index} className="listitem">{temp}</li>
                    ))
                }
            </ul>
            <div>List of Car Companies 2</div>
            <ul>
                
                {
                    CarArray2.map((temp, index) => (
                        <li key={temp.name+index} className="listitem">{temp.name}</li>
                    ))
                }
            </ul>
            <br></br>
            <div>
                <img src={imageBg} alt="Image1" />
            </div>
            {/* <div>
                <img src='https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png'/>
            </div> */}
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

// React Conditional
// if - && Operator
// if else - ternary operator