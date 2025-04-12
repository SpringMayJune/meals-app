import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Meal } from '../../../models/Meal';

interface FavoriteMealsState {
  favoriteMeals: Meal[];
}

const initialState: FavoriteMealsState = {
  favoriteMeals: [],
};

const favoriteMealsSlice = createSlice({
  name: 'favoriteMeals',
  initialState,
  reducers: {
    setFavoriteMeals(state, action: PayloadAction<Meal>) {
      state.favoriteMeals = [...state.favoriteMeals, action.payload];
    },
    removeFavoriteMeal(state, action: PayloadAction<Meal>) {
      const updatedFavorites = state.favoriteMeals.filter((meal) => meal.id !== action.payload.id);
      state.favoriteMeals = updatedFavorites;
    },
  },
});

export const { setFavoriteMeals, removeFavoriteMeal } = favoriteMealsSlice.actions;
export const favoriteMealsReducer = favoriteMealsSlice.reducer;
