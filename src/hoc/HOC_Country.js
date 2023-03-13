import React from 'react';
import withFilter from './HOC';

const countries = ['india', 'pakistan', 'china', 'russia', 'uk', 'japan', 'brazil', 'ukraine', 'usa'];

const HOC_Country = () => {
  return (
    <div>
        {
            countries && countries.map((item) => (
                <div>{item}</div>
            ))
        }
    </div>
  )
}

export default withFilter(HOC_Country, countries);
