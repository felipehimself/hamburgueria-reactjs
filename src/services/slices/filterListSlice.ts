import { createSlice } from '@reduxjs/toolkit';

const filterListSlice = createSlice({
  name: 'filterListSlice',
  initialState: { term: '' },
  reducers: {
    setTerm: (state, action) => {
      state.term = action.payload;
    },
  },
});

export const { setTerm } = filterListSlice.actions;

export default filterListSlice.reducer;
