import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import DOMPurify from 'dompurify'
import Chart from '../components/Chart'
import { useSelector, useDispatch } from 'react-redux'
import { Add } from '../redux/Cryptoslice'


function Details() {
  const param=useParams()
  const {toggle}=useSelector((state)=>state.crypto)
  console.log(toggle)

  const dispatch=useDispatch()
  
const [coin,setcoin]=useState({})
const [quantity,setquantity]=useState()
console.log(coin)
  const fetch=async()=>{
    const url=`https://api.coingecko.com/api/v3/coins/${param.id}?sparkline=true`
 const res=await axios.get(url)
 console.log(res.data)
  setcoin(res.data)
  }
  useEffect(()=>{
 fetch()
  },[])

  const addding=(coin)=>{
    if(quantity >=1){

      dispatch(Add({quantity,coin})) 
    }
  }
   const change=(e)=>{
    setquantity(e.target.value)
   }
  
  return (
    <div className='rounded-div px-4 my-2 py-2'>
      <div className='flex py-8'>
        <img className='w-20 mr-8' src={coin.image?.large} alt='/' />
        <div>
          <p className='text-3xl font-bold'>{coin?.name} price</p>
          <p>({coin.symbol?.toUpperCase()} / USD)</p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <div className='flex justify-between'>
            {coin.market_data?.current_price ? (
              <p className='text-3xl font-bold'>${coin.market_data.current_price.usd.toLocaleString()}</p>
            ) : null}
            <p>7 Day</p>
          </div>
          <div>
            <Chart/>
          </div>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Market Cap</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Volume (24h)</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>

          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>24h High</p>
              {coin.market_data?.high_24h ? (
                <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>24h Low</p>
              {coin.market_data?.low_24h ? (
                <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>
  <div className='md:flex md:justify-center   md:h-[300px] shadow-sm'>
      <div>
        <Link to='/'>
      <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Home</button>
        </Link>
     <Link to='/portfolio'>
     <button  className=" ml-4 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Portfolio</button>
     </Link>
     <div className='flex items-center mt-4'>
   <input onChange={change} className="shadow w-[70px]  border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="number" placeholder="Qty" />  
   <button  onClick={()=>addding(coin)}  className=" rounded-sm px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out">Buy</button> 
     </div>
      </div>


        </div>
        <div>
          <p className='text-xl font-bold'>Market Stats</p>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Trust Score</p>
              {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>

          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (24h)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (7d)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (14d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (30d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (60d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (1y)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>
              ) : null}
            </div>
          </div>
          <div className='flex justify-around p-8 text-accent'>

          </div>
        </div>
        
      </div>

      {/* Description */}
      <div className='py-4'>
        <p className='text-xl font-bold'>About {coin.name}</p>
        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}} ></p>
      </div>
    </div>
  )
}

export default Details