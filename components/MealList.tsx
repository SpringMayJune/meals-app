import { View, FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { Meal } from '../models/Meal';
import MealItem from './MealItem';

type MealListProps = {
  onPressHandler: (item: Meal) => void;
  meals: Meal[];
};
const MealList: React.FC<MealListProps> = (props: MealListProps) => {
  const { onPressHandler, meals } = props;
  const renderMealItem = (item: ListRenderItemInfo<Meal>) => {
    return <MealItem meal={item.item} pressHandler={(item: Meal) => onPressHandler(item)} />;
  };
  return (
    <View style={styles.container}>
      <FlatList data={meals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#3f2f25',
  },
});
