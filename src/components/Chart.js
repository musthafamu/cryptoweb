import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import moment from "moment";

  
  ChartJS.register(
    CategoryScale,
     LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
function Chart() {
    const id=useParams()
    const [chart,setchart]=useState([])
    const fetch=async()=>{
        const url=`https://api.coingecko.com/api/v3/coins/${id.id}/market_chart?vs_currency=usd&days=7`
        const res=await axios.get(url)
        const coinData = res.data.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));
        setchart(coinData)
    }
   
    useEffect(()=>{
     fetch()
    },[])
    const options = {
        responsive: true
      }
      const data = {
        labels: chart.map(value => moment(value.x).format('MMM DD')),
        datasets: [
          {
            fill: true,
            label: id.id,
            data: chart.map(val => val.y),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          }
        ]
      }
  return (
    <div>
          <Line options={options} data={data} />

    </div>
  )
}

export default Chart