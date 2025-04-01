import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen';
import { setBackgroundColorAsync } from 'expo-system-ui';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MealsScreen from './screen/MealsScreen';
import { Category } from './models/Category';
import MealDetailScreen from './components/MealDetailScreen';
import { Meal } from './models/Meal';

export type RootStackParamList = {
  CategoriesScreen: undefined;
  MealsScreen: { category: Category };
  MealDetailScreen: { meal: Meal };
};
export default function App() {
  setBackgroundColorAsync('black');
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <StatusBar style="light"></StatusBar>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' },
        }}
      >
        <Stack.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
