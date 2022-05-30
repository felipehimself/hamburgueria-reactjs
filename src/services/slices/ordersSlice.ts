import { createSlice } from '@reduxjs/toolkit';
import { IOrder } from '../../interfaces/dataInterfaces';

const initialState: IOrder[] = [];

const ordersSlice = createSlice({
  name: 'ordersSlice',
  initialState: { data: initialState },
  reducers: {
    setOrderData: (state, action) => {
      state.data.push(action.payload);
    },

    removeOrder: (state, action) => {
      const filteredState = state.data.filter((item)=> item.id !== action.payload)
      state.data = filteredState;
    },
    
  },
});

export const { setOrderData, removeOrder } = ordersSlice.actions;

export default ordersSlice.reducer;