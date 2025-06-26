import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

interface CheckmarkBtnProps {
  disabled?: boolean;
  onPress?: () => void;
}

const CheckmarkBtn = ({ disabled = false, onPress }: CheckmarkBtnProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, disabled && styles.buttonDisabled]}
    >
      <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled]}>
        Complete
      </Text>
      <Image
        source={require("../assets/images/checkmark.png")}
        style={[styles.checkmark, disabled && styles.checkmarkDisabled]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 315,
    height: 72,
    borderRadius: 28,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(39, 67, 253, 1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  buttonDisabled: {
    borderColor: "rgba(200, 200, 200, 1)",
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
