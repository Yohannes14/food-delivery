import { createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native';

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action) => {
            let newCart = [...state.items];
            let itemIndex = state.items.findIndex(item => item.id == action.payload.id);
            if (itemIndex >= 0) {
                newCart.splice(itemIndex, 1)
            } else {
                Alert.alert("Cart", "Can't remove the item that is not added to cart!")
            }
            state.items = newCart;
        },
        emptyCart: (state, action) => {
            state.items = [];
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export const selectCartItems = state => state.cart?.items;
const createMemoizedSelector = (selectorFn) => {
    let lastArgs = null;
    let lastResult = null;

    return (...args) => {
        if (lastArgs && args.every((arg, index) => arg === lastArgs[index])) {
            return lastResult;
        }

        lastArgs = args;
        lastResult = selectorFn(...args);

        return lastResult;
    };
};

export const selectCartItemsById = createMemoizedSelector((state, id) =>
    state.cart.items.filter(item => item.id === id)
);
// export const selectCartItemsById = (state, id) => state.cart.items.filter(item => item.id == id);
export const selectCartTotal = state =>
    state.cart?.items?.reduce((total, item) => total + item.price, 0);


export default cartSlice.reducer