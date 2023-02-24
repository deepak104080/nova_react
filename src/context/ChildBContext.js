import React from 'react';
import ChildCContext from './ChildCContext';

const ChildBContext = () => {
  return (
    <div>
        <div className='drillingComp'>
                <h5>Child B Component</h5>
                <ChildCContext/>
        </div>
    </div>
  )
}

export default ChildBContext
