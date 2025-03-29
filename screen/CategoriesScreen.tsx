import CategoryGridTile from '../components/CategoryGridTile';
import { mockCategories } from '../data/dummy-data';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Category } from '../models/Category';

const renderCategoryItem = (item: ListRenderItemInfo<Category>) => {
  return <CategoryGridTile title={item.item.title} color={item.item.color} />;
};
const CategoriesScreen = () => {
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
