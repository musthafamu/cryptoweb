import React from 'react'
import { AiOutlineStar,AiOutlineRise} from "react-icons/ai";
import { BiTrendingDown } from "react-icons/bi";



function Cointrending({item}) {
  return (
<tr className='h-[70px] border-b overflow-hidden'>
  <td className='w-[30px]'>{item.market_cap_rank}</td>
  <td className=''> <div className='flex flex-col   items-center'>
    <img className='w-6 mr-2 rounded' src={item.image} alt={item.id}/>
    <p className='hidden sm:table-cell'>{item.name}</p>
    </div> </td>
  <td>{item.symbol.toUpperCase()}</td>
  <td>{item.current_price.toLocaleString()}</td>
  <td>
    {item.price_change_percentage_24h >0?(<p className='text-green-600'>{item.price_change_percentage_24h}% <AiOutlineRise/></p>):(<p className='text-red-600 '>{item.price_change_percentage_24h}% <BiTrendingDown className='' /></p>)}
  </td>
  <td className='w-[180px] hidden md:table-cell'>${item.total_volume.toLocaleString()}</td>
  <td className='w-[180px] hidden sm:table-cell'>${item.market_cap.toLocaleString()}</td>

</tr>
  )
}

export default Cointrending