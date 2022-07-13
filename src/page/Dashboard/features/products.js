import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    idName: "",
    enName: "",
    descriptionId: "",
    descriptionEn: "",
    category: "",
    image: "",
};
export const productSlice = createSlice({
    name: "products",
    initialState: { initialStateValue },
    reducers: {
        editProducts: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { submit } = productSlice.actions;
export default productSlice.reducer;