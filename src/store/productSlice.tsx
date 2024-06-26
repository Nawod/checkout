import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    productList : [
        {
          id: 1,
          img : '',
          name : 'Hand Cream',
          code : '#238u39',
          count : 1,
          price : 10
        },
        {
          id: 2,
          img : '',
          name : 'Cosmetic Cream',
          code : '#238u39',
          count : 1,
          price : 20
        },
      ]
};

const productSlice = createSlice({
    name: "product-data",
    initialState: initialState,
    reducers: {
        //update count
        increaseCount(state, action) {
            const index = state.productList.findIndex((e) => e.id === action.payload)
            if(index || index === 0){
                state.productList[index].count += 1;
            }
        },
        decreaseCount(state, action) {
            const index = state.productList.findIndex((e) => e.id === action.payload)
            if(index || index === 0){
                 if(state.productList[index].count !== 0){
                    state.productList[index].count -= 1;
                }
            }
        },
        //remove item
        removeItem(state,action){
            const index = state.productList.findIndex((e) => e.id === action.payload)
            state.productList.splice(index, 1);
        }
    }
    });

export const productAction = productSlice.actions;
    
export default productSlice;