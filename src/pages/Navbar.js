import React from 'react'
import { BsCurrencyDollar,BsCurrencyBitcoin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <Link to='/'>
    <div className='bg-gray-900 overflow-hidden p-4 lg:p-5  '>
      <div className='flex md:justify-center items-center'>
        <b className='text-yellow-400 '><BsCurrencyDollar size={40}/></b>
        <h1 className='text-blue-500 text-4xl lg:text-[50px]  font-bold '>Crypto<span className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-white'>Web</span></h1>
         <b className='text-yellow-400'  ><BsCurrencyBitcoin size={40}/></b> 
      </div>
      
    </div>
    </Link>
  )
}

export default Navbar