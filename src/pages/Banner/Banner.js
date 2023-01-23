import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from './Slider'

function Banner() {
  const [slider,setslider]=useState([])
  const fetch=async()=>{
   const url= `https://api.coingecko.com/api/v3/search/trending`
  const res= await axios.get(url)
  setslider(res.data.coins)
  console.log(slider)
  
 }
 useEffect(()=>{
   fetch()
 },[])
  return (
    <div className=''>
     <div>
   <Slider item={slider} />
     </div>
    </div>
  )
}

export default Banner