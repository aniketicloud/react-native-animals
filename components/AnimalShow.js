import { useState } from "react";
import { Button, Text, View } from "react-native";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};

export const AnimalShow = () => {
  const [animals, setAnimals] = useState([]);

  const handleTouch = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <View>
      <Button title="Add Animal" onPress={handleTouch}></Button>
      <Text>Animals: {animals}</Text>
    </View>
  );
};
