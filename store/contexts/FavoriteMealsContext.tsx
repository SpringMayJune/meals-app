import { createContext, ReactNode, useEffect, useState } from 'react';
import { Meal } from '../../models/Meal';

export type FavoriteMealsContextType = {
  favoriteMeals: Meal[];
  setFavoriteMeals: (ids: Meal[]) => void;
  addFavorites: (meal: Meal) => void;
  removeFavorites: (meal: Meal) => void;
};
export const FavoriteMealsContext = createContext<FavoriteMealsContextType>({
  favoriteMeals: [],
  setFavoriteMeals: () => {},
  addFavorites: (meal: Meal) => {},
  removeFavorites: (meal: Meal) => {},
});

export const FavoriteMealsContextProvider = (props: { children: ReactNode }) => {
  const [favoriteMeals, setFavoriteMeals] = useState<Meal[]>([]);

  const addFavorites = (meal: Meal) => {
    setFavoriteMeals([...favoriteMeals, meal]);
  };

  const removeFavorites = (meal: Meal) => {
    const updatedFavoriteIds = favoriteMeals.filter((favoriteMeal) => favoriteMeal.id !== meal.id);
    setFavoriteMeals(updatedFavoriteIds);
  };
  //   const [favoritMeals, setFavoritMeals] = useState<Meal[]>([]);

  //   useEffect(() => {
  //     setFavoritMeals(originalInfo);
  //   }, [originalInfo]);

  return (
    <FavoriteMealsContext.Provider
      value={{
        favoriteMeals,
        setFavoriteMeals,
        addFavorites,
        removeFavorites,
      }}
    >
      {props.children}
    </FavoriteMealsContext.Provider>
  );
};
