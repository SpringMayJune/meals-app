import CategoryGridTile from '../components/CategoryGridTile';
import { mockCategories } from '../data/dummy-data';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Category } from '../models/Category';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList, 'CategoriesScreen'>;
const CategoriesScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const onPressHandler = (item: Category) => {
    navigation.navigate('MealsScreen', {
      category: item,
    });
  };
  const renderCategoryItem = (item: ListRenderItemInfo<Category>) => {
    return (
      <CategoryGridTile
        title={item.item.title}
        color={item.item.color}
        pressHandler={() => onPressHandler(item.item)}
      />
    );
  };
  return (
    <FlatList
      data={mockCategories}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      key={'fixed_2columns'}
    />
  );
};

export default CategoriesScreen;
