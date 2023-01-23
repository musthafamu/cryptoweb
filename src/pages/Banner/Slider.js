import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BsCurrencyDollar,BsCurrencyBitcoin } from 'react-icons/bs';
import {Link,useNavigate} from 'react-router-dom'
function Slider({item}) {
  const responsive = {
    0: {
        items: 1,
    },
    320: {
        items: 2,
    },
    640: {
        items: 3,
    },
    900: {
        items: 4,
    },
    1024: {
        items: 5
    },
    1280: {
        items: 6
    }
  }
  const navigate=useNavigate()
    const handleDragStart = (e) => e.preventDefault();
 
    const items=item.map((item)=>(
        <div onClick={()=>navigate(`/${item.item.id}`)} className='flex rounded-div hover:scale-105 ease-in-out duration-100 text-center justify-center shadow-xl flex-col items-center'>
        <img className='w-[50px] rounded-lg  border-2 border-white' src={item.item.large }onDragStart={handleDragStart} role="presentation" />
   <div>
    <p>{item.item.name}</p>
    <p>{item.item.symbol}</p>
   </div>
   <div>
    <img src=''/>
    <p className='flex items-center'><i><BsCurrencyBitcoin/></i> {item.item.price_btc.toFixed(7)}</p>
   </div>
        </div>

    ))
  return (
    <div>
 <AliceCarousel responsive={responsive} disableButtonsControls animationDuration={1000} infinite autoPlayInterval={2500} autoPlay disableSlideInfo disableDotsControls mouseTracking items={items} />

    </div>
  )
}

export default Slider