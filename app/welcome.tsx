import { Image } from "expo-image";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {};

const Welcome = (props: Props) => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Image
        source={require("../assets/images/welcomePhoto.png")}
        style={styles.image}
      />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 505,
    top: 0,
    left: 0,
  },
});
