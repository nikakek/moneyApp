import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface SecondButtonProps {
  text: string;
  onPress: () => void;
  background?: "outline";
}

export function SecondButton({
  text = "",
  onPress,
  background,
}: SecondButtonProps) {
  const isOutline = background === "outline";

  if (isOutline) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, styles.outlineButton]}>
          <View style={styles.buttonContent}>
            <Text style={[styles.buttonText, styles.outlineText]}>{text}</Text>
          </View>
          <Image
            source={require("../assets/images/buttonImage.png")}
            style={[styles.buttonImage, styles.outlineButtonImageLeft]}
            contentFit="contain"
          />
          <Image
            source={require("../assets/images/buttonImage.png")}
            style={[styles.buttonImage, styles.outlineButtonImageRight]}
            contentFit="contain"
          />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={["#4960F9", "#1433FF"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.button}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
        <Image
          source={require("../assets/images/buttonImage.png")}
          style={[styles.buttonImage, styles.leftButtonImage]}
          contentFit="contain"
        />
        <Image
          source={require("../assets/images/buttonImage.png")}
          style={[styles.buttonImage, styles.rightButtonImage]}
          contentFit="contain"
        />
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: "100%",
    borderRadius: 28,
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "center",
    textTransform: "capitalize",
  },
  outlineButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(85, 107, 255, 1)",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Montserrat",
    lineHeight: 20,
    textAlign: "center",
  },
  outlineText: {
    color: "rgba(85, 107, 255, 1)",
  },
  buttonContent: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    zIndex: 1,
  },
  buttonImage: {
    width: 106,
    height: 40,
    position: "absolute",
    zIndex: 0,
  },
  leftButtonImage: {
    left: 0,
    top: -5.3,
    transform: [{ scaleX: -1 }],
  },
  rightButtonImage: {
    right: 0,
    top: -5.3,
  },
  outlineButtonImageLeft: {
    left: 0,
    bottom: -6,
    transform: [{ rotate: "180deg" }, { scaleX: -1 }],
  },
  outlineButtonImageRight: {
    right: 0,
    bottom: -6,
    transform: [{ rotate: "180deg" }],
  },
});
