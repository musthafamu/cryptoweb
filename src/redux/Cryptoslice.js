import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios"

const initialState = {
    data:[],
    more:20,
    portfolio:[],

    status:null,
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
       state.portfolio.push(action.payload)
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
export const {Showmore,Add}=cryptoSlice.actions
export default cryptoSlice.reducer