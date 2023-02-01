import React from 'react'
import { AiOutlineStar,AiOutlineRise} from "react-icons/ai";
import { BiTrendingDown } from "react-icons/bi";



function Cointrending({item}) {

  const hours=item.price_change_percentage_24h.toFixed(2)
  return (
<tr className='h-[70px] border-b overflow-hidden'>
  <td className='w-[0px]'>{item.market_cap_rank}</td>
  <td className=''> <div className='flex flex-col   items-center'>
    <img className='w-6 mr-2 rounded' src={item.image} alt={item.id}/>
    <p className='sm:table-cell'>{item.name}</p>
    </div> </td>
  <td className='w-[0px] hidden sm:table-cell '>{item.symbol.toUpperCase()}</td>
  <td className='px-7'>{item.current_price.toLocaleString()}</td>
  <td className='px-3'>
    {item.price_change_percentage_24h >0?(<p className='text-green-600'>{hours}% <AiOutlineRise/></p>):(<p className='text-red-600 '>{hours}% <BiTrendingDown className='' /></p>)}
  </td>
  <td className='w-[180px] hidden md:table-cell'>${item.total_volume.toLocaleString()}</td>
  <td className='w-[180px] hidden sm:table-cell'>${item.market_cap.toLocaleString()}</td>

</tr>
  )
}

export default Cointrending