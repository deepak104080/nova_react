import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import SemiParent from './SemiParent';
import Child3 from './Child3';
import Child4 from './Child4';

const Parent = () => {
  return (
    <div>
        <h2 className='bg-primary'>Parent Component - Few Child Components</h2>
        <Child1 test="value"/>
        <Child2 />


        <SemiParent test="test123">
          <Child3/>
          <Child4/>
        </SemiParent>

      
    </div>
  )
}

export default Parent
