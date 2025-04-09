import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        updateItem: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].quantity = action.payload.quantity;
            }
        },
        deleteItem: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
})
export const { addItem, updateItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;