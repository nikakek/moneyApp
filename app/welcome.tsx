import { Image } from "expo-image";
import { Stack, router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "../components/Button";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Image
        source={require("../assets/images/welcomePhoto.png")}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            text="Sign In"
            onPress={() => router.push("/signIn")}
            showArrow={true}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            text="Sign Up"
            onPress={() => router.push("/signUp")}
            background="outline"
            showArrow={true}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
  },
  image: {
    position: "absolute",
    width: 718,
    height: 705,
    top: -224,
    left: -280,
    zIndex: 0,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 75,
    left: 0,
    right: 0,
    flexDirection: "column",
    alignItems: "center",
    gap: 26,
    paddingHorizontal: 30,
    zIndex: 1,
  },
  buttonWrapper: {
    width: 315,
    height: 72,
  },
});
