import Header from "@/layout/Header";
import { FlatList, Platform, StatusBar, StyleSheet, View } from "react-native";
import { COLORS } from "@/constants/ui";

const DATA = [
  { id: "1", color: "aqua" },
  { id: "2", color: "blue" },
  { id: "3", color: "green" },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Header />

      <View
        style={[
          styles.container,
          { backgroundColor: Platform.OS === "ios" ? "white" : "red" },
        ]}
      >
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View style={[styles.box, { backgroundColor: item.color }]} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
  box: { width: 300, height: 300, margin: 10, borderRadius: 10 },
});
