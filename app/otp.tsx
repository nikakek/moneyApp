import { Image } from "expo-image";
import { Stack } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SecondButton } from "../components/SecondButton";

const Otp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <Image
          source={require("../assets/images/otp.png")}
          style={styles.image}
          contentFit="cover"
        />
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.description}>
          We will send you a one-time password to this mobile number.
        </Text>
        <Text style={styles.enterNumber}>Enter mobile number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            placeholder="+995 555 55 55 55"
            placeholderTextColor="rgba(58, 58, 58, 0.5)"
          />
          <View
            style={[
              styles.underline,
              phoneNumber.length > 0 && styles.activeUnderline,
            ]}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <SecondButton text="Get OTP" onPress={() => {}} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 257,
    height: 269,
    alignSelf: "center",
    marginTop: 100,
  },
  title: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 28,
    color: "rgba(58, 58, 58, 1)",
    textAlign: "center",
    marginTop: 50,
  },
  description: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 14,
    color: "rgba(58, 58, 58, 1)",
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 28,
  },
  enterNumber: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 14,
    textAlign: "center",
    textTransform: "capitalize",
    color: "rgba(185, 185, 185, 1)",
    marginTop: 28,
  },
  inputContainer: {
    width: "80%",
    alignSelf: "center",
    marginTop: 28,
  },
  input: {
    fontFamily: "Inter",
    fontSize: 16,
    color: "rgba(58, 58, 58, 1)",
    textAlign: "center",
    paddingVertical: 8,
  },
  underline: {
    height: 1,
    backgroundColor: "rgba(185, 185, 185, 1)",
    width: "100%",
  },
  activeUnderline: {
    backgroundColor: "rgba(39, 67, 253, 1)",
  },
  buttonWrapper: {
    width: 315,
    height: 72,
    position: "absolute",
    bottom: 75,
    alignSelf: "center",
  },
});
