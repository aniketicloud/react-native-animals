import { Image, StyleSheet, Text, View } from "react-native";

const svgMap = {};

export const AnimalShow = ({ type }) => {
  return (
    <View style={styles.container}>
      {type && (
        <Text>Hello</Text>
        // <Image
        //   style={styles.image}
        //   alt="animal"
        //   source={require("../assets/animals/cow.svg")}
        // />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    color: "#fff",
  },
  image: {
    width: 50,
    height: 50,
    margin: 10,
  },
});
