import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CheckmarkBtnProps {
  disabled?: boolean;
  onPress?: () => void;
}

const CheckmarkBtn = ({ disabled = false, onPress }: CheckmarkBtnProps) => {
  return (
    <View>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[styles.button, disabled && styles.buttonDisabled]}
      >
        <Text
          style={[styles.buttonText, disabled && styles.buttonTextDisabled]}
        >
          Complete
        </Text>
        <Image
          source={require("../assets/images/checkmark.png")}
          style={[styles.checkmark, disabled && styles.checkmarkDisabled]}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 28,
    backgroundColor: "rgba(255, 255, 255, 1)",
    justifyContent: "center",
    alignItems: "center",
    width: 315,
    height: 72,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    margin: "auto",
    marginTop: 135,
  },
  buttonDisabled: {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  buttonText: {
    color: "rgba(39, 67, 253, 1)",
    fontSize: 20,
    lineHeight: 20,
  },
  buttonTextDisabled: {
    color: "rgba(200, 200, 200, 1)",
  },
  checkmark: {
    width: 18,
    height: 13,
    tintColor: "rgba(39, 67, 253, 1)",
  },
  checkmarkDisabled: {
    tintColor: "rgba(200, 200, 200, 1)",
  },
});

export default CheckmarkBtn;
