import { createSlice } from '@reduxjs/toolkit';

import { IOptions } from '../../interfaces/dataInterfaces';

export interface IOrder extends IOptions {
  isModalOpen: boolean;
}

const modalWorkingSlice = createSlice({
  name: 'modalOrderSlice',
  initialState: { isModalOpen: false },
  reducers: {
    setModalWorking: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setModalWorking } = modalWorkingSlice.actions;

export default modalWorkingSlice.reducer;
