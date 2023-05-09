import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import { AnimalShow } from "./components/AnimalShow";
import { useState } from "react";
import { SafeAreaView } from "react-native";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};

export default function App() {
  const [animals, setAnimals] = useState([]);

  const handleTouch = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <Button
            style={styles.button}
            title="Add Animal"
            onPress={handleTouch}
          ></Button>
          {animals.map((animal, index) => (
            <AnimalShow type={animal} key={index} />
          ))}
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#311b6b",
    // alignItems: "center",
    paddingTop: 20,
    // justifyContent: "center",
  },
  button: {
    textAlign: "left"
  },
});
