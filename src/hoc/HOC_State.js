import React from 'react';
import withFilter from './HOC';

const states = ['up', 'delhi', 'haryana', 'madhya pradesh', 'bihar', 'andhra pradesh', 'wb'];

const HOC_State = () => {
  return (
    <div>
        {
            states && states.map((item) => (
                <div>{item}</div>
            ))
        }
    </div>
  )
}

export default withFilter(HOC_State, states);
