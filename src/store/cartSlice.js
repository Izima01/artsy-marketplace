import { createSlice } from '@reduxjs/toolkit';
import { updateCartData, removeCartItem } from '../config/cartActions';

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
            if (existingItem) {
                existingItem.quantity = newItem.quantity;
                existingItem.totalPrice = newItem.price * newItem.quantity;
                updateCartData(newItem, false);
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
                updateCartData(newItem, true);
            }
        },
        removeFromCart(state, action) {
            state.isChanged = true;
            state.itemsList = state.itemsList.filter((item) => item.id != action.payload);
            removeCartItem(action.payload);
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
        }, openedCart(state) {
            state.isChanged = false;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;