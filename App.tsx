import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen';
import { setBackgroundColorAsync } from 'expo-system-ui';
import { createStackNavigator } from '@react-navigation/stack';
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
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <StatusBar style="dark"></StatusBar>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
        <Stack.Screen
          name="MealsScreen"
          component={MealsScreen}
          options={{
            title: 'Meals',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="MealDetailScreen"
          component={MealDetailScreen}
          options={{
            title: 'About the Meal',
            headerBackTitle: 'Back',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
