import React from 'react';
import ChildB from './ChildB';

const ChildA = (props) => {
  return (
    <div>
        
        <div className='drillingComp'>
            <h5>Child A Component</h5>
            <ChildB data = {props.data} />
        </div>

    </div>
  )
}

export default ChildA
