import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen';
import { setBackgroundColorAsync } from 'expo-system-ui';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MealsScreen from './screen/MealsScreen';
import { Category } from './models/Category';

export type RootStackParamList = {
  CategoriesScreen: undefined;
  MealsScreen: { category: Category };
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
            headerBackTitle: 'Back', // ← 여기!
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
