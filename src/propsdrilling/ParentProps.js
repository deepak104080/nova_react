import React, { useState } from 'react';
import ChildA from './ChildA';

const ParentProps = () => {

  const [parendata, setParentdata] = useState('Parent Data')

  return (
    <div className='drillingComp'>
      <h5>Parent Component</h5>
      <ChildA data = {parendata}/>
    </div>
  )
}

export default ParentProps;
