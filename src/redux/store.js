import { configureStore } from '@reduxjs/toolkit';
import { courseReducer } from './courses/reducer';

export const store = configureStore({
  reducer: {
    courses: courseReducer,
  },
});
