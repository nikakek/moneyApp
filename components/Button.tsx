import ArrowRight from "@/assets/images/arrowRight";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
  showArrow?: boolean;
  background?: "outline";
  centered?: boolean;
}

export function Button({
  text = "",
  onPress,
  showArrow,
  background,
  centered,
}: ButtonProps) {
  const isOutline = background === "outline";

  if (isOutline) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, styles.outlineButton]}>
          <View
            style={[
              styles.buttonContent,
              centered && styles.buttonContentCentered,
            ]}
          >
            <Text style={[styles.buttonText, styles.outlineText]}>{text}</Text>
            {showArrow && (
              <ArrowRight
                color="rgba(85, 107, 255, 1)"
                style={styles.buttonIcon}
              />
            )}
          </View>
          <Image
            source={require("../assets/images/buttonImage.png")}
            style={[styles.buttonImage, styles.outlineButtonImage]}
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
        <View
          style={[
            styles.buttonContent,
            centered && styles.buttonContentCentered,
          ]}
        >
          <Text style={styles.buttonText}>{text}</Text>
          {showArrow && <ArrowRight color="#fff" style={styles.buttonIcon} />}
        </View>
        <Image
          source={require("../assets/images/buttonImage.png")}
          style={styles.buttonImage}
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
  },
  outlineButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(85, 107, 255, 1)",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter",
  },
  outlineText: {
    color: "rgba(85, 107, 255, 1)",
  },
  buttonContent: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    zIndex: 1,
  },
  buttonContentCentered: {
    justifyContent: "center",
    gap: 8,
  },
  buttonIcon: {
    width: 19,
    height: 13.3,
  },
  buttonImage: {
    width: 65,
    height: 64,
    position: "absolute",
    right: 0,
    top: -5.3,
    zIndex: 0,
  },
  outlineButtonImage: {
    top: "auto",
    bottom: -6,
    transform: [{ rotate: "180deg" }, { scaleX: -1 }],
  },
});
