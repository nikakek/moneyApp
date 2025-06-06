import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
  showArrow?: boolean;
}

export function Button({ text, onPress, showArrow }: ButtonProps) {
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
          <Image
            source={require("../assets/images/buttonImage.png")}
            style={styles.buttonImage}
            contentFit="contain"
          />
          {showArrow && (
            <Image
              source={require("../assets/images/arrowRight.png")}
              style={styles.buttonIcon}
              contentFit="contain"
            />
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 153,
    height: 64,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 39,
  },
  buttonIcon: {
    width: 19,
    height: 13.3,
  },
  buttonImage: {
    width: 65,
    height: 64,
    right: -27,
    top: -28,
    position: "absolute",
  },
});
