import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen';
import { setBackgroundColorAsync } from 'expo-system-ui';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MealsScreen from './screen/MealsScreen';
import { Category } from './models/Category';
import MealDetailScreen from './screen/MealDetailScreen';
import { Meal } from './models/Meal';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
// import { FavoriteMealsContextProvider } from './store/contexts/FavoriteMealsContext';
import FavoritesScreen from './screen/FavoritesScreen';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

export type RootStackParamList = {
  Categories: undefined;
  MealsScreen: { category: Category };
  MealDetailScreen: { meal: Meal; fromScreen?: 'MealsScreen' | 'FavoritesScreen' };
};

export type RootDrawerParamList = {
  DrawerCategories: undefined;
  DrawerFavorites: undefined;
};
export default function App() {
  setBackgroundColorAsync('black');
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Drawer = createDrawerNavigator<RootDrawerParamList>();

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          drawerStyle: {
            backgroundColor: '#351401',
          },
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: '#351401',
          drawerActiveBackgroundColor: '#e4baa1',
        }}
      >
        <Drawer.Screen
          name="DrawerCategories"
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
            drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
          }}
        />
        <Drawer.Screen
          name="DrawerFavorites"
          component={FavoritesScreen}
          options={{
            title: 'Favorites',
            drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />,
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <StatusBar style="light"></StatusBar>
      <Provider store={store}>
        {/* <FavoriteMealsContextProvider> */}
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={DrawerNavigator}
            options={{
              // title: 'All Categories',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsScreen"
            component={MealsScreen}
            // options={({ route, navigation }) => {
            //   const categoryTitle = route.params.category.title;
            //   return {
            //     title: categoryTitle,
            //   };
            // }}
          />
          <Stack.Screen
            name="MealDetailScreen"
            component={MealDetailScreen}
            options={{
              title: 'About the Meal',
            }}
          />
        </Stack.Navigator>
      </Provider>
      {/* </FavoriteMealsContextProvider> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
