import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Path, Svg } from "react-native-svg";
import ArrowRight from "../assets/images/arrowRight";
import CheckmarkBtn from "../components/CheckmarkBtn";
import { SecondButton } from "../components/SecondButton";

const { width } = Dimensions.get("window");

const ArrowIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 12h14m-7-7l7 7-7 7"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Transfer = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState("0");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNumberPress = (number: string) => {
    if (amount === "0") {
      setAmount(number);
    } else {
      setAmount(amount + number);
    }
  };

  const handleDotPress = () => {
    if (!amount.includes(".")) {
      setAmount(amount + ".");
    }
  };

  const handleContinue = () => {
    setShowSuccess(true);
  };

  const handleExecuteAgain = () => {
    setShowSuccess(false);
    setAmount("0");
  };

  const handleComplete = () => {
    navigation.goBack();
  };

  const NumberButton = ({ number, onPress }: { number: string; onPress: () => void }) => (
    <TouchableOpacity style={styles.numberButton} onPress={onPress}>
      <Text style={styles.numberButtonText}>{number}</Text>
    </TouchableOpacity>
  );

  if (showSuccess) {
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.arrowWrapper}
            onPress={() => navigation.goBack()}
          >
            <ArrowRight width={26} height={21} style={styles.arrow} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Transaction</Text>
        </View>

        {/* Success Content */}
        <View style={styles.successContainer}>
          <Image
            source={require("../assets/images/bigCheckmark.png")}
            style={styles.checkmarkImage}
          />

          <Text style={styles.successText}>
            You have successfully sent{"\n"}
            <Text style={styles.amountSuccessText}>${amount}</Text> to{" "}
            <Text style={styles.recipientSuccessText}>Pedro Gonzales</Text>.
          </Text>

          <Image
            source={require("../assets/images/pfp.png")}
            style={styles.successRecipientImage}
          />
        </View>

        {/* Buttons */}
        <View style={styles.successButtonsContainer}>
          <View style={styles.buttonWrapper}>
            <SecondButton text="Execute Again" onPress={handleExecuteAgain} />
          </View>
          <View style={styles.buttonWrapper}>
            <CheckmarkBtn onPress={handleComplete} />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrowWrapper}
          onPress={() => navigation.goBack()}
        >
          <ArrowRight width={26} height={21} style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transfer</Text>
      </View>

      <Text style={styles.enterAmountText}>Enter Amount</Text>

      <View style={styles.amountContainer}>
        <Text style={styles.dollarSign}>$</Text>
        <Text style={styles.amountText}>{amount}</Text>
      </View>
      <View style={styles.amountUnderline} />

      <Text style={styles.toText}>To</Text>

      <View style={styles.recipientContainer}>
        <Image
          source={require("../assets/images/pfp.png")}
          style={styles.recipientImage}
        />
        <Text style={styles.recipientName}>Pedro Gonzales</Text>
      </View>

      {/* Number Pad */}
      <View style={styles.numberPadContainer}>
        <View style={styles.numberRow}>
          <NumberButton number="1" onPress={() => handleNumberPress("1")} />
          <NumberButton number="2" onPress={() => handleNumberPress("2")} />
          <NumberButton number="3" onPress={() => handleNumberPress("3")} />
        </View>
        <View style={styles.numberRow}>
          <NumberButton number="4" onPress={() => handleNumberPress("4")} />
          <NumberButton number="5" onPress={() => handleNumberPress("5")} />
          <NumberButton number="6" onPress={() => handleNumberPress("6")} />
        </View>
        <View style={styles.numberRow}>
          <NumberButton number="7" onPress={() => handleNumberPress("7")} />
          <NumberButton number="8" onPress={() => handleNumberPress("8")} />
          <NumberButton number="9" onPress={() => handleNumberPress("9")} />
        </View>
        <View style={styles.numberRow}>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={handleDotPress}
          >
            <Text style={styles.numberButtonText}>.</Text>
          </TouchableOpacity>
          <NumberButton number="0" onPress={() => handleNumberPress("0")} />
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <ArrowIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    width: width,
    height: 147,
    backgroundColor: "#4950F9",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: "hidden",
    paddingTop: 68,
    paddingHorizontal: 30,
  },
  arrowWrapper: {
    position: "absolute",
    top: 68,
    left: 30,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    transform: [{ rotate: "180deg" }],
  },
  headerTitle: {
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
  enterAmountText: {
    marginTop: 60,
    alignSelf: "center",
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 20,
    color: "rgba(39, 67, 253, 1)",
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
    marginTop: 30,
  },
  dollarSign: {
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: 32,
    color: "rgba(39, 67, 253, 1)",
    marginRight: 5,
  },
  amountText: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 40,
    color: "rgba(185, 185, 185, 1)",
    minWidth: 50,
  },
  amountUnderline: {
    height: 1,
    backgroundColor: "rgba(222, 225, 239, 1)",
    width: 240,
    alignSelf: "center",
    marginTop: 16,
  },
  toText: {
    marginTop: 20,
    alignSelf: "center",
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 20,
    color: "rgba(39, 67, 253, 1)",
  },
  recipientContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 50,
  },
  recipientImage: {
    width: 46,
    height: 46,
    borderRadius: 14,
    marginRight: 10,
  },
  recipientName: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 20,
    color: "rgba(0, 0, 0, 1)",
  },
  numberPadContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40,
    marginBottom: 76,
  },
  numberRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  numberButton: {
    width: 91,
    height: 66,
    borderRadius: 15,
    backgroundColor: "rgba(245, 246, 250, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
  numberButtonText: {
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: 24,
    color: "rgba(39, 67, 253, 1)",
  },
  continueButton: {
    width: 91,
    height: 66,
    borderRadius: 15,
    backgroundColor: "rgba(39, 67, 253, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
  // ✅ Success screen styles below:
  successContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 30,
    paddingTop: 83,
  },
  checkmarkImage: {
    width: 120,
    height: 120,
  },
  successText: {
    marginTop: 20,
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 20,
    textAlign: "center",
    color: "rgba(39, 67, 253, 1)",
  },
  amountSuccessText: {
    fontWeight: "700",
    color: "rgba(0, 0, 0, 1)",
  },
  recipientSuccessText: {
    fontWeight: "700",
    color: "rgba(39, 67, 253, 1)",
  },
  successRecipientImage: {
    width: 91,
    height: 91,
    borderRadius: 22,
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3.49 },
    shadowOpacity: 0.2,
    shadowRadius: 17.43,
    elevation: 8,
  },
  successButtonsContainer: {
    paddingHorizontal: 30,
    paddingBottom: 56,
    gap: 20,
  },
  buttonWrapper: {
    width: 315,
    height: 72,
    alignSelf: "center",
  },
});
