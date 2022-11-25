import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: {},
};

export const inventorySlice = createSlice({
    name: "inventory",
    initialState,
    reducers: {
        addItems: (state, action) => {
            const itemName = action.payload.name;
            if (itemName in state.items) {
                state.items[itemName]["amount"] += action.payload.amount;
            } else {
                state.items[action.payload.name] = action.payload;
            }
        },
        buyItem: (state, action) => {
            const itemName = action.payload.name;
            const itemAmount = action.payload.amount;
            if (itemName in state.items) {
                state.items[itemName]["amount"] -= itemAmount;
                if (state.items[itemName]["amount"] === 0) {
                    delete state.items[itemName];
                }
            }
        },
        updateItemPrice: (state, action) => {
            const itemName = action.payload.name;
            const itemNewPrice = action.payload.price;
            if (itemName in state.items) {
                state.items[itemName]["price"] = itemNewPrice;
            }
        },
    },
});

export const { addItems, buyItem, updateItemPrice } = inventorySlice.actions;

export default inventorySlice.reducer;
