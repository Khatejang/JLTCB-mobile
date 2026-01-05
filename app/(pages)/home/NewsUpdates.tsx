import { ScrollView, Text, View, StyleSheet } from "react-native";
import NewsCardTemplate from "./news-updates/NewsCardTemplate"
import NewsTabButtons from "./news-updates/NewsTabButtons";

export default function NewsUpdates() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>News and Updates</Text>
      <NewsTabButtons></NewsTabButtons>
      <ScrollView>
        {data.map((data, i) => (
            <View key={i}>
              <NewsCardTemplate/>
            </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 18,
  },
});
