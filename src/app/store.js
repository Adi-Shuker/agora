import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "../features/Inventory/InventorySlice";
export const store = configureStore({
    reducer: {
        inventory: inventoryReducer,
    },
});
