import { Image } from "expo-image";
import { Stack, router } from "expo-router";
import * as React from "react";
import {
  Animated,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Text, TextInput } from "react-native-paper";
import { Button } from "../components/Button";

const { height: screenHeight } = Dimensions.get("window");

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = React.useState(false);

  // Animated values for smooth transitions
  const imageTranslateY = React.useRef(new Animated.Value(0)).current;
  const imageScale = React.useRef(new Animated.Value(1)).current;
  const formTranslateY = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (e) => {
        setKeyboardHeight(e.endCoordinates.height);
        setIsKeyboardVisible(true);

        // Animate image when keyboard appears
        Animated.parallel([
          Animated.timing(imageTranslateY, {
            toValue: -120,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(imageScale, {
            toValue: 0.7,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(formTranslateY, {
            toValue: -50,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start();
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardHeight(0);
        setIsKeyboardVisible(false);

        // Animate back to original position
        Animated.parallel([
          Animated.timing(imageTranslateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(imageScale, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(formTranslateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start();
      }
    );

    return () => {
      keyboardDidHideListener?.remove();
      keyboardDidShowListener?.remove();
    };
  });

  const validateEmail = (text: string) => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(text);
    setIsValidEmail(isValid);
    setEmailError(text && !isValid ? "The email address is incomplete." : "");
  };

  const spacingFactor = isKeyboardVisible ? 0.5 : 1;
  const getAdjustedSpacing = (originalValue: number) =>
    originalValue * spacingFactor;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Stack.Screen options={{ headerShown: false }} />

          {/* Animated Background Image without overlay */}
          <Animated.View
            style={[
              styles.imageContainer,
              {
                transform: [
                  { translateY: imageTranslateY },
                  { scale: imageScale },
                ],
              },
            ]}
          >
            <Image
              source={require("../assets/images/signPhoto.png")}
              style={styles.image}
            />
          </Animated.View>

          <ScrollView
            contentContainerStyle={[
              styles.scrollContainer,
              {
                minHeight: isKeyboardVisible
                  ? screenHeight - keyboardHeight
                  : screenHeight,
              },
            ]}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <Animated.View
              style={[
                styles.formContainer,
                {
                  transform: [{ translateY: formTranslateY }],
                  marginTop: getAdjustedSpacing(280),
                },
              ]}
            >
              <View>
                <Text
                  variant="headlineMedium"
                  style={[
                    styles.title,
                    {
                      marginTop: getAdjustedSpacing(33),
                      marginBottom: getAdjustedSpacing(48),
                    },
                  ]}
                >
                  Sign Up
                </Text>
              </View>

              <View
                style={[styles.inputContainer, { gap: getAdjustedSpacing(40) }]}
              >
                <View style={styles.inputWrapper}>
                  <TextInput
                    label="Email Address"
                    mode="flat"
                    style={styles.input}
                    value={email}
                    onChangeText={validateEmail}
                    underlineColor={
                      emailError
                        ? "rgba(253, 39, 39, 1)"
                        : "rgba(39, 67, 253, 1)"
                    }
                    activeUnderlineColor={
                      emailError
                        ? "rgba(253, 39, 39, 1)"
                        : "rgba(39, 67, 253, 1)"
                    }
                    right={
                      isValidEmail ? (
                        <TextInput.Icon
                          icon="check"
                          color="rgba(203, 62, 249, 1)"
                        />
                      ) : null
                    }
                  />
                  {emailError ? (
                    <Text style={styles.errorText}>{emailError}</Text>
                  ) : null}
                </View>

                <View style={styles.inputWrapper}>
                  <TextInput
                    label="Password"
                    mode="flat"
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => {
                      setPassword(text);
                      const hasSpecialChar = /[!@*]/.test(text);
                      setPasswordError(
                        text.length < 8
                          ? "Password must be at least 8 characters"
                          : !hasSpecialChar
                          ? "Must contain special characters - !, @, *"
                          : ""
                      );
                    }}
                    secureTextEntry={!showPassword}
                    textContentType="password"
                    passwordRules="minlength: 8;"
                    underlineColor={
                      passwordError
                        ? "rgba(253, 39, 39, 1)"
                        : "rgba(39, 67, 253, 1)"
                    }
                    activeUnderlineColor={
                      passwordError
                        ? "rgba(253, 39, 39, 1)"
                        : "rgba(39, 67, 253, 1)"
                    }
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                    right={
                      isPasswordFocused ? (
                        <TextInput.Icon
                          icon={showPassword ? "eye-off" : "eye"}
                          onPress={() => setShowPassword(!showPassword)}
                          color="rgba(41, 41, 41, 1)"
                        />
                      ) : null
                    }
                  />
                  {passwordError ? (
                    <Text style={styles.errorText}>{passwordError}</Text>
                  ) : null}
                </View>
              </View>

              <Text
                variant="bodyLarge"
                style={[
                  styles.forgotPassword,
                  {
                    marginTop: getAdjustedSpacing(26),
                    marginBottom: getAdjustedSpacing(40),
                  },
                ]}
                onPress={() => router.push("/otp")}
              >
                Forgot Password?
              </Text>

              <View
                style={[
                  styles.buttonWrapper,
                  {
                    marginTop: getAdjustedSpacing(93),
                    marginBottom: 40,
                  },
                ]}
              >
                <Button text="Sign Up" onPress={() => {}} showArrow={true} />
              </View>
            </Animated.View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    position: "relative",
  },
  imageContainer: {
    position: "absolute",
    top: -99,
    left: -62,
    width: 435,
    height: 397,
    zIndex: 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  formContainer: {
    paddingHorizontal: 30,
    marginTop: 280,
    zIndex: 2,
  },
  title: {
    fontWeight: "700",
    color: "rgba(58, 58, 58, 1)",
    fontFamily: "Montserrat",
    textTransform: "capitalize",
    marginLeft: 15,
    marginTop: 33,
    marginBottom: 48,
  },
  inputContainer: {
    gap: 40,
  },
  inputWrapper: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "Inter",
    paddingHorizontal: 5,
  },
  forgotPassword: {
    color: "#4960F9",
    alignSelf: "flex-start",
    marginTop: 26,
    marginBottom: 40,
  },
  buttonWrapper: {
    width: 315,
    height: 72,
    alignSelf: "center",
    marginTop: 93,
  },
  errorText: {
    color: "rgba(253, 39, 39, 1)",
    fontSize: 13,
    marginTop: 8,
    fontFamily: "Inter",
  },
});
