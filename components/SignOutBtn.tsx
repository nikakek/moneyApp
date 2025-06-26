import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SignOutButton({ size = "big" }) {
  const isBig = size === "big";

  return (
    <TouchableOpacity
      style={[styles.button, isBig ? styles.bigButton : styles.smallButton]}
      activeOpacity={0.8}
    >
      <View style={styles.innerContainer}>
        <Text style={[styles.text, isBig ? styles.bigText : styles.smallText]}>
          Sign Out
        </Text>
        <Image
          source={require("../assets/images/signOut.png")} 
          style={isBig ? styles.bigIcon : styles.smallIcon}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderWidth: 1.31,
    borderColor: "rgba(39, 67, 253, 1)",
    borderRadius: 37,
    backgroundColor: "transparent",
    paddingHorizontal: 30,
  },
  bigButton: {
    height: 72,
  },
  smallButton: {
    height: 60,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    flex: 1,
  },
  text: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    letterSpacing: 0,
    textTransform: "capitalize",
    color: "rgba(39, 67, 253, 1)",
  },
  bigText: {
    fontSize: 23.61,
    lineHeight: 23.61,
  },
  smallText: {
    fontSize: 18,
    lineHeight: 18,
  },
  bigIcon: {
    width: 25,
    height: 24,
  },
  smallIcon: {
    width: 21,
    height: 20,
  },
});
