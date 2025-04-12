import { configureStore } from '@reduxjs/toolkit';
import { favoriteMealsReducer } from '../../components/context/favoriteMeals';

export const store = configureStore({
  reducer: { favoriteMeals: favoriteMealsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
