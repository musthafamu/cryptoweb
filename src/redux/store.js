
import { configureStore } from '@reduxjs/toolkit'
import cryptoReducer, { cryptofetch } from './Cryptoslice'

export const store = configureStore({
  reducer: {
    crypto:cryptoReducer
  },
})

store.dispatch(cryptofetch())

