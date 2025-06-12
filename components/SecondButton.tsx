import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface SecondButtonProps {
  text: string;
  onPress: () => void;
  background?: "outline";
  disabled?: boolean;
}

export function SecondButton({
  text = "",
  onPress,
  background,
  disabled = false,
}: SecondButtonProps) {
  const isOutline = background === "outline";

  if (isOutline) {
    return (
      <TouchableOpacity onPress={onPress} disabled={disabled}>
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
          {disabled && <View style={styles.disabledOverlay} />}
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={styles.buttonContainer}>
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
            source={require("../assets/images/bigButtonImage.png")}
            style={[styles.buttonImage, styles.leftButtonImage]}
            contentFit="contain"
          />
          <Image
            source={require("../assets/images/bigButtonImage.png")}
            style={[styles.buttonImage, styles.rightButtonImage]}
            contentFit="contain"
          />
        </LinearGradient>
        {disabled && <View style={styles.disabledOverlay} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
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
    height: 41,
    position: "absolute",
    zIndex: 0,
  },
  leftButtonImage: {
    left: 0,
    top: -1,
  },
  rightButtonImage: {
    right: 0,
    top: -1,
    transform: [{ scaleX: -1 }],
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
  disabledOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 28,
    zIndex: 2,
  },
});
