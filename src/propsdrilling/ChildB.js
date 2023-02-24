import React from 'react';
import ChildC from './ChildC';

const ChildB = (props) => {
  return (
    <div>
        <div className='drillingComp'>
            <h5>Child B Component</h5>
            <ChildC data = {props.data}/>
        </div>
    </div>
  )
}

export default ChildB
