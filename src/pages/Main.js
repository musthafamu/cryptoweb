import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { cryptofetch } from '../redux/Cryptoslice'
import Cointrending from '../components/Cointrending'
import { Showmore } from '../redux/Cryptoslice'



function Main() {
  const {data,more,}=useSelector((state)=>state.crypto)
   const [search,setSearch]=useState('')
   
    const dispatch=useDispatch()
    useEffect(()=>{
  dispatch(cryptofetch())
    },[])
    const naviagte=useNavigate()
    
    
  return (
    <div>
    <div className='rounded-div my-4'>
      <div className='flex  flex-col md:justify-center   pt-4 pb-6 text-center items-center justify-center  md:text-center'>
        <h1 className='text-3xl md:text-5xl mt-4 pb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'>Search Crypto</h1>
        <form>
          <input onChange={(e)=>setSearch(e.target.value)} className='w-full  bg-white <input class="shadow appearance-none border rounded border-blue-600   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username' type='text' placeholder='Serach Crypto'  />
        </form>
        </div>
        <div className='flex justify-end items-center px-7 pb-2 md:py-4'>
          <Link to='/portfolio'>
        <button className=' md:text-2xl hover:text-blue-700 duration-200 text-blue-600 font-bold'>Portfolio</button>
          </Link>
         
        </div>
        <table className='w-full   border-collapse text-center'>
          <thead>
            <tr className='border-b'>
              <th className='px-4'>Rank</th>
              <th className=''>Coin</th>
              <th className='hidden sm:table-cell'></th>
              <th>Price</th>
              <th>24h</th>
              <th className='hidden md:table-cell'>24h Volume</th>
              <th className='hidden sm:table-cell'>M-cap</th>
            </tr>
          </thead>
{data? data.filter((item)=>item.name.toLowerCase().includes(search)||item.name.toUpperCase().includes(search)).slice(0,more).map((item)=>{

  return(
    <tbody onClick={()=>naviagte(`${item.id}`)} className='hover:shadow-xl duration-150 hover:scale-100 ease-in-out' key={item.id}>

      <Cointrending  item={item} />
    </tbody>
    )
  }):<p>loading</p>}
  </table>
    </div>
{!search ?<button onClick={()=>dispatch(Showmore())} className='my-4 py-2 w-full px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Show More</button>:null}

    </div>
  )
}

export default Main