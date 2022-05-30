import { createSlice } from '@reduxjs/toolkit';
import data from '../../utils/data';

import { IAppData } from '../../interfaces/dataInterfaces';

const initialState: IAppData[] = data;

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: { data: initialState },
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },

    
  },
});

export const { getData } = dataSlice.actions;

export default dataSlice.reducer;