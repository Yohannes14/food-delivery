import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './redux/cartSlice'
import restaurantSlice from './redux/restaurantSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        restaurant: restaurantSlice
    },
})