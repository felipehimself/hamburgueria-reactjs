import { configureStore } from '@reduxjs/toolkit';
import dataSlice from '../slices/dataSlice';
import modalOrderSlice from '../slices/modalOrderSlice';
import modalWorkingSlice from '../slices/modalWorkingSlice';
import ordersSlice from '../slices/ordersSlice';

import filterListSlice from '../slices/filterListSlice';

const store = configureStore({
  reducer: {
    data: dataSlice,
    modalOrder: modalOrderSlice,
    modalWorking: modalWorkingSlice,
    ordersData: ordersSlice,
    term: filterListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
