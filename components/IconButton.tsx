import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Meal } from '../models/Meal';

type IconButtonItem = Meal;

type IconButtonProps = {
  handleOnPress: (item: IconButtonItem) => void;
  icon: any;
  color: string;
  item: IconButtonItem;
};
const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  const { handleOnPress, icon, color, item } = props;
  return (
    <Pressable
      onPress={() => handleOnPress(item)}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
