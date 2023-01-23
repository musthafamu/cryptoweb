import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Singlepage from '../components/singlepage'

function Portfolio() {
  const { portfolio}=useSelector((state)=>state.crypto)
  
  console.log(portfolio)

  return (
    <div className=' my-4'>
        <h1 className='text-3xl text-center md:text-5xl pb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-blue-600'>Portfolio</h1>

      <div className='flex justify-end pr-4 pb-4  md:pr-[50px] '>
        <Link to='/'>
      <button className="mr-4 px-4 py-2.5 bg-blue-600 text-white font-medium text-xs  uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Home</button>
        </Link>
      <button className=" px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Back</button>

      </div>
      <div className='flex  items-center px-7 pb-2 md:py-4 '>
    <table className='w-full   border-collapse text-center'>
      <thead>

      <tr className='border-b'>
        <th>Coin</th>
        <th>Price</th>
        <th></th>
        <th>Qty</th>
        <th>Value</th>
        <th>Sell</th>
      </tr>
      </thead>
      {portfolio&&portfolio.map((item)=>{
           return(
          <tbody>

            <Singlepage item={item} />
          </tbody>
         
         )
        })}

    </table>

      </div>
        {portfolio.length>0 ?<p></p>:<p className='text-4xl font-serif text-center mt-7'>Empty</p>}
    </div>
  )
}

export default Portfolio