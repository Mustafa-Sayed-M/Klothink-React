import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        navbarMenuOpen: false,
        faqsOpen: []
    },
    reducers: {
        handleNavbarMenuOpen: (state, action) => {
            state.navbarMenuOpen = action.payload;
        },
        handleFaqsOpen: (state, action) => {
            const findIndex = state.faqsOpen.findIndex(fId => fId === action.payload);
            if (findIndex !== -1) {
                state.faqsOpen = state.faqsOpen.filter(fId => fId !== action.payload);
            } else {
                state.faqsOpen.push(action.payload);
            }
        }
    },
});

export default appSlice.reducer;
export const {
    handleNavbarMenuOpen,
    handleFaqsOpen
} = appSlice.actions;