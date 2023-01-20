import React from 'react'

const Child1 = (props) => {
  console.log('props', props);
  return (
    <div>
        <h3 className='bg-warning'>This is child 1 component</h3>
    </div>
  )
}

export default Child1
