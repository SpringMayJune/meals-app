import { View, Image, Text, Pressable, StyleSheet, Platform } from 'react-native';
import { Meal } from '../models/Meal';
import MealDetails from './MealDetails';

type MealItemProps = {
  meal: Meal;
  pressHandler: (meal: Meal) => void;
};
const MealItem: React.FC<MealItemProps> = (props: MealItemProps) => {
  const { meal, pressHandler } = props;
  return (
    <View key={meal.id} style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={() => pressHandler(meal)}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: meal.imageUrl }} style={styles.image} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.titleText}>{meal.title}</Text>
            <MealDetails meal={meal} />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  descriptionContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
  },
  titleText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 8,
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailText: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
