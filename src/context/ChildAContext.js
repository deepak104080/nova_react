import React from 'react';
import ChildBContext from './ChildBContext';

const ChildAContext = () => {
  return (
    <div>
        <div className='drillingComp'>
                <h5>Child A Component</h5>
                <ChildBContext/>
            </div>
    </div>
  )
}

export default ChildAContext
