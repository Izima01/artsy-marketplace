import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'nav',
    initialState: { navOpen: false, activePage: '' },
    reducers: {
        toggleNav(state, action) {
            state.navOpen = action.payload;
        },
        setCurrentPage(state, action) {
            state.activePage = action.payload;
        }
    }
});

export const navActions = navSlice.actions;

export default navSlice;