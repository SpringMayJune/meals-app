import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type IconButtonProps = {
  handleOnPress: () => void;
  icon: any;
  color: string;
};
const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  const { handleOnPress, icon, color } = props;
  return (
    <Pressable onPress={handleOnPress} style={({ pressed }) => pressed && styles.pressed}>
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
