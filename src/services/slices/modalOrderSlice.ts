import { createSlice } from '@reduxjs/toolkit';

import { IOptions } from '../../interfaces/dataInterfaces';

export interface IOrder extends IOptions {
  isModalOpen:boolean
}

const initialState: IOrder = { nome: '', descricao: '', img: '', itens: [], isModalOpen:false };

const modalOrderSlice = createSlice({
  name: 'modalOrderSlice',
  initialState: { orderData: initialState },
  reducers: {
    setModalOrder: (state, action) => {
      state.orderData = action.payload;
    },
  },
});

export const { setModalOrder } = modalOrderSlice.actions;

export default modalOrderSlice.reducer;
