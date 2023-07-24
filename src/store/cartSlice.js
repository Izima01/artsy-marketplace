import { createSlice } from '@reduxjs/toolkit';
import { updateCartData } from '../config/cartActions';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        isChanged: false
    },
    reducers: {
        addToCart(state, action) {
            state.isChanged = true;
            const newItem = action.payload;
            const existingItem = state.itemsList.find((item) => item.id === newItem.id);
            updateCartData(newItem);
            if (existingItem) {
                existingItem.quantity = newItem.quantity;
                existingItem.totalPrice = newItem.price * newItem.quantity;
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price * newItem.quantity,
                    name: newItem.name,
                    category: newItem.category,
                    pic: newItem.pic
                });
            }
        },
        removeFromCart(state, action) {
            state.isChanged = true;
            console.log(action.payload);
            const existingItem = state.itemsList.find((item) => item.id === action.payload.id);
            existingItem.quantity = 0;
            existingItem.totalPrice = 0;
        },
        replaceCartData(state, action) {
            state.itemsList = [];
            state.isChanged = true;
            const data = action.payload;
            data.map((dat) => {
                if (dat.quantity > 0) {
                    state.itemsList.push(dat);
                }
            });
            console.log("gotten cart data", state.itemsList);
        }, openedCart(state) {
            state.isChanged = false;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;