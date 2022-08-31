import { createSlice } from '@reduxjs/toolkit';
import { IOrder } from '../../interfaces/dataInterfaces';

const storagedData = JSON.parse(localStorage.getItem('orders-data')!);

const initialState: IOrder[] = storagedData ?? [];

const ordersSlice = createSlice({
  name: 'ordersSlice',
  initialState: { data: initialState },
  reducers: {
    setOrderData: (state, action) => {
      state.data.push(action.payload);
      localStorage.setItem('orders-data', JSON.stringify(state.data));

    },

    removeOrder: (state, action) => {
      const filteredState = state.data.filter((item)=> item.id !== action.payload)
      state.data = filteredState;
      localStorage.setItem('orders-data', JSON.stringify(state.data));

    },
    
  },
});

export const { setOrderData, removeOrder } = ordersSlice.actions;

export default ordersSlice.reducer;