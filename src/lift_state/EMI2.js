import React, { useEffect, useState } from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const EMI2 = (props) => {

  const {pricipalInProps, yearInProps, rateInProps} = props;

  const [int, setInt] = useState(0);

  //calculate interest
  useEffect(() => {
    setInt((pricipalInProps * yearInProps * rateInProps) / 100);
    console.log(typeof(int), typeof(pricipalInProps))
  }, [pricipalInProps, yearInProps, rateInProps]);


  const dataChart = {
      labels: ['Principal', 'Interest'],
      datasets: [
        {
          label: 'Loan - Pricipal and Interest',
          data: [pricipalInProps, int],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        }
      ]
      
  }

  return (
    <div>
        Your requirements : - <br></br>
        Principal - {pricipalInProps}  <br></br>
        Year - {yearInProps}  <br></br>
        Rate - {rateInProps}  <br></br>

        <br></br><br></br>
        Interest - {int}<br></br>
        Amount - {parseInt(pricipalInProps) + parseInt(int)}<br></br><br></br>

        <Pie data={dataChart}/>
        <br></br>
    </div>
  )
}

export default EMI2
