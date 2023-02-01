import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios"
import { toast } from 'react-toastify';


const initialState = {
    data:[],
    more:20,
    portfolio:localStorage.getItem('portfolio')?JSON.parse(localStorage.getItem('portfolio')):[],
    status:null,
    toggle:true
  }


  export  const cryptofetch=createAsyncThunk(
    "crypto/cryptofetch",
    async()=>{
      const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      const res=await axios.get(url)
      return res?.data
    }
  )
const cryptoSlice=createSlice({
    name:'crypto',
    initialState,
    reducers:{ 
      Showmore:(state)=>{
    state.more +=20
      },
      Add:(state,action)=>{
        const exist=state.portfolio.some((item)=>item.coin.id==action.payload.coin.id)
         if(exist){
          toast.info(`${action.payload.coin.symbol} alreday`,{
            position:"bottom-left"
          })
          }else{
           state.portfolio.push(action.payload)
         toast.info(`${action.payload.coin.symbol} Added to portfolio`,{
          position:"bottom-left"
         })
        

           localStorage.setItem("portfolio",JSON.stringify(state.portfolio))
         }

      },
      Sell:(state,action)=>{
       state.portfolio=state.portfolio.filter((item)=>item.coin.id!==action.payload.id)
       localStorage.setItem("portfolio",JSON.stringify(state.portfolio))
       toast.info(` Remove from portfolio`,{
        position:"bottom-left"
       })
      },
      
      
    },
    extraReducers:{
[cryptofetch.pending]:(state,action)=>{
  state.status="pending"
},
[cryptofetch.fulfilled]:(state,action)=>{
  state.status="success"
  state.data=action.payload
},
[cryptofetch.rejected]:(state,action)=>{
  state.status="rejected"
}

    }
})
export const {Showmore,Add,Sell,toggle}=cryptoSlice.actions
export default cryptoSlice.reducer