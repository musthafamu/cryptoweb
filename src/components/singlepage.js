import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Sell } from '../redux/Cryptoslice'

function Singlepage({item}) {
   const dispatch=useDispatch()
    const price=item.coin.market_data?.current_price.usd
        const [total,settotal]=useState(item.quantity*price)

  return (
    <tr className='h-[70px] w-full border-b shadow-md  '>
      <td><div className='flex flex-col  items-center'>
           <img  className='w-[25px]' src={item.coin.image?.large} />
           <p>{item.coin.name}</p>
        </div></td>
        <td>{item.coin.market_data?.current_price.usd.toLocaleString()}</td>
        <td></td>
        <td>{item.quantity}</td>
        <td>{total},$</td>
        <td>
          <div className='flex flex-col items-center'>
      <button onClick={()=>{dispatch(Sell(item.coin))}} className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Sell</button>
          </div>
        </td>
    </tr>
  
  )
}

export default Singlepage