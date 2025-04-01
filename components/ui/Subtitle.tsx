import { View, Text, StyleSheet } from 'react-native';

type SubtitleProps = {
  subtitle: string;
};

const Subtitle: React.FC<SubtitleProps> = (props: SubtitleProps) => {
  const { subtitle } = props;
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subtitle}> {subtitle} </Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
