import React from 'react';
import withFilter from './HOC';

const states = ['up', 'delhi', 'haryana', 'madhya pradesh', 'bihar', 'andhra pradesh', 'wb'];

const HOC_State = (props) => {
  const {list} = props;
  return (
    <div>
        {
            states && states.map((item) => (
                <div>{item}</div>
            ))
        }
        <br></br><br></br>
        <div>Filtered List - {list.length}</div>
        <div>--------------------------------</div>
        <br></br>

        {
            list && list.map((item) => (
                <div>{item}</div>
            ))
        }
    </div>
  )
}

export default withFilter(HOC_State, states);
