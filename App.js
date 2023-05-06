import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AnimalShow } from "./components/AnimalShow";

export default function App() {
  return (
    <View style={styles.container}>
      <AnimalShow />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
