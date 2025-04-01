import { View, Text, StyleSheet } from 'react-native';

type LabelProps = {
  labelList: string[];
};
const Label: React.FC<LabelProps> = (props: LabelProps) => {
  const { labelList } = props;

  return labelList.map((label) => {
    return (
      <View key={label} style={styles.labelItem}>
        <Text style={styles.text}>{label}</Text>
      </View>
    );
  });
};
export default Label;

const styles = StyleSheet.create({
  labelItem: {
    borderRadius: 6,
    backgroundColor: '#e2b497',
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginVertical: 8,
    marginHorizontal: 24,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: '#351401',
    padding: 4,
  },
});
