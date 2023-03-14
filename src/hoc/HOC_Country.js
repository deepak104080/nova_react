import React from 'react';
import withFilter from './HOC';

const countries = ['india', 'pakistan', 'china', 'russia', 'uk', 'japan', 'brazil', 'ukraine', 'usa'];

const HOC_Country = (props) => {
  const {list} = props;
  return (
    <div>
        {
            countries && countries.map((item) => (
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

export default withFilter(HOC_Country, countries);
