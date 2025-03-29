import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen';
import { setBackgroundColorAsync } from 'expo-system-ui';

export default function App() {
  setBackgroundColorAsync('black');
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
