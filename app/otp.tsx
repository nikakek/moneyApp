import { Image } from "expo-image";
import { Stack } from "expo-router";
import React, { useCallback, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { SecondButton } from "../components/SecondButton";

const { height: screenHeight } = Dimensions.get("window");

const Otp: React.FC = () => {
  const [isVerificationScreen, setIsVerificationScreen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Create refs for OTP inputs using a proper type
  const inputRefs = useRef<(TextInput | null)[]>([null, null, null, null]);

  // Animated values
  const imageTranslateY = useRef(new Animated.Value(0)).current;
  const imageScale = useRef(new Animated.Value(1)).current;
  const buttonTranslateY = useRef(new Animated.Value(0)).current;
  const titleMarginTop = useRef(new Animated.Value(50)).current;
  const contentTranslateY = useRef(new Animated.Value(0)).current;

  const validatePhoneNumber = (number: string): boolean => {
    return number.length >= 10; // Just check if it's a reasonable length for a phone number
  };

  const validateOtp = (): boolean => {
    return otp.every(digit => /^\d$/.test(digit));
  };

  const formatPhoneNumber = (number: string): string => {
    // Just keep the numbers and let user input any format they want
    return number;
  };

  const handleGetOtp = async () => {
    setError(null);
    if (!validatePhoneNumber(phoneNumber)) {
      setError("Please enter a valid phone number");
      return;
    }
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsVerificationScreen(true);
    } catch (err) {
      setError("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Handle successful verification
      console.log("OTP verified successfully");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setError(null);
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setOtp(["", "", "", ""]);
      inputRefs.current[0]?.focus();
    } catch (err) {
      setError("Failed to resend OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (e) => {
        setKeyboardHeight(e.endCoordinates.height);
        setIsKeyboardVisible(true);
        Animated.parallel([
          Animated.timing(imageTranslateY, {
            toValue: -40,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(imageScale, {
            toValue: 0.7,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(buttonTranslateY, {
            toValue: -e.endCoordinates.height + 60,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(titleMarginTop, {
            toValue: -40,
            duration: 300,
            useNativeDriver: false,
          }),
          Animated.timing(contentTranslateY, {
            toValue: -60,
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
          Animated.timing(buttonTranslateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(titleMarginTop, {
            toValue: 50,
            duration: 300,
            useNativeDriver: false,
          }),
          Animated.timing(contentTranslateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start();
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [imageTranslateY, imageScale, buttonTranslateY, titleMarginTop, contentTranslateY]);

  const handlePhoneNumberChange = useCallback((text: string) => {
    const formatted = formatPhoneNumber(text);
    setPhoneNumber(formatted);
  }, []);

  const handleOtpChange = useCallback((text: string, index: number) => {
    if (!/^\d*$/.test(text)) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < 3) {
      inputRefs.current[index + 1]?.focus();
    } else if (text.length === 0 && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }, [otp]);

  const renderPhoneNumberScreen = () => (
    <>
      <Text style={styles.description}>
        We will send you a one-time password to this mobile number.
      </Text>
      <Text style={[styles.description, { color: "rgba(185, 185, 185, 1)" }]}>
        Enter mobile number
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
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
      {error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );

  const renderOtpVerificationScreen = () => (
    <>
      <Text style={styles.description}>
        Enter the OTP sent to {phoneNumber}
      </Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <View key={index} style={styles.otpInputWrapper}>
            <TextInput
              ref={ref => {
                inputRefs.current[index] = ref;
              }}
              style={styles.otpInput}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
              keyboardType="number-pad"
              maxLength={1}
            />
            <View style={[styles.underline, digit ? styles.activeUnderline : null]} />
          </View>
        ))}
      </View>
      <TouchableWithoutFeedback onPress={handleResendOtp}>
        <Text style={styles.resendText}>
          Didn't you receive the OTP?{" "}
          <Text style={styles.resendLink}>Resend OTP</Text>
        </Text>
      </TouchableWithoutFeedback>
    </>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <Animated.View
          style={[
            styles.contentContainer,
            {
              transform: [{ translateY: contentTranslateY }],
            },
          ]}
        >
          <Animated.View
            style={[
              styles.imageWrapper,
              {
                transform: [
                  { translateY: imageTranslateY },
                  { scale: imageScale },
                ],
              },
            ]}
          >
            <Image
              source={require("../assets/images/otp.png")}
              style={styles.image}
              contentFit="cover"
            />
          </Animated.View>
          <Animated.Text style={[styles.title, { marginTop: titleMarginTop }]}>
            OTP Verification
          </Animated.Text>

          {isVerificationScreen ? renderOtpVerificationScreen() : renderPhoneNumberScreen()}
        </Animated.View>

        <Animated.View
          style={[
            styles.buttonContainer,
            {
              transform: [{ translateY: buttonTranslateY }],
            },
          ]}
        >
          <SecondButton
            text={isVerificationScreen ? "Verify" : "Get OTP"}
            onPress={isVerificationScreen ? handleVerifyOtp : handleGetOtp}
            disabled={isVerificationScreen ? !otp.every(digit => digit.length === 1) : loading}
          />
          {loading && (
            <ActivityIndicator
              size="small"
              color="#FFFFFF"
              style={styles.buttonLoader}
            />
          )}
        </Animated.View>
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
  contentContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
  },
  imageWrapper: {
    alignSelf: "center",
    marginTop: 70,
    width: 257,
    height: 269,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 28,
    color: "rgba(58, 58, 58, 1)",
    textAlign: "center",
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
  buttonContainer: {
    width: 315,
    height: 72,
    position: "absolute",
    bottom: 95,
    alignSelf: "center",
    zIndex: 999,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 48,
    gap: 16,
  },
  otpInputWrapper: {
    width: 40,
  },
  otpInput: {
    fontFamily: "Inter",
    fontSize: 24,
    color: "rgba(58, 58, 58, 1)",
    textAlign: "center",
    paddingVertical: 8,
  },
  resendText: {
    fontFamily: "Inter",
    fontSize: 14,
    color: "rgba(58, 58, 58, 1)",
    textAlign: "center",
    marginTop: 32,
  },
  resendLink: {
    color: "rgba(39, 67, 253, 1)",
  },
  errorText: {
    fontFamily: "Inter",
    fontSize: 14,
    color: "#FF3B30",
    textAlign: "center",
    marginTop: 8,
  },
  buttonLoader: {
    position: "absolute",
    right: 16,
    top: "50%",
    marginTop: -10,
  },
});