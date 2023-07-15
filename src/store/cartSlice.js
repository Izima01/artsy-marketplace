import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        // totalQty: 0,
        showCart: false,
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

            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price,
                    name: newItem.name
                });
            }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;