import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
// Remove the problematic import and use a fallback
// import LinearGradient from 'react-native-linear-gradient';
import ArrowRight from "../assets/images/arrowRight";
import SecArrowRight from "../assets/images/secArrowRight.tsx";

const { width } = Dimensions.get("window");

// Fallback gradient component using View with backgroundColor
const FallbackGradient = ({ children, style }) => (
  <View style={[style, { backgroundColor: '#4950F9' }]}>
    {children}
  </View>
);

const MyCards = () => {
  const navigation = useNavigation();
  // Card data - only first two cards
  const cards = [
    {
      id: '1',
      balance: '$4500.00',
      type: 'Company',
      expiry: '12/25',
      lastDigits: '1234',
      logo: require("../assets/images/mastercard.png"),
      isGradient: true,
    },
    {
      id: '2',
      balance: '$200.00',
      type: 'Home',
      expiry: '07/2028',
      lastDigits: '3215',
      logo: require("../assets/images/cardBackground.png"),
      isGradient: false,
    },
  ];

  // Transaction data
  const transactions = [
    {
      id: 1,
      title: "Shopping",
      date: "15 Mar 2025, 15:00 PM",
      amount: "-120$",
      icon: require("../assets/images/pfp.png"),
    },
    {
      id: 2,
      title: "Medicine",
      date: "18 Feb 2024, 11:00 AM",
      amount: "-555.00$",
      icon: require("../assets/images/pfp.png"),
    },
    {
      id: 3,
      title: "Sport",
      date: "1 Feb 2024, 16:32 PM",
      amount: "-11.555.00$",
      icon: require("../assets/images/pfp.png"),
    },
    {
      id: 4,
      title: "Travel",
      date: "1 Feb 2024, 16:32 PM",
      amount: "-1.555.00$",
      icon: require("../assets/images/pfp.png"),
    },
  ];

  const renderTransaction = ({ item }) => (
    <TouchableOpacity style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <Image source={item.icon} style={styles.transactionIcon} />
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <Text style={styles.transactionDate}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.transactionRight}>
        <Text style={styles.transactionAmount}>{item.amount}</Text>
        <SecArrowRight width={10} height={18} color="rgba(199, 199, 199, 1)" style={styles.transactionArrow} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrowWrapper}
          onPress={() => navigation.goBack()}
        >
          <ArrowRight width={26} height={21} style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>You can check your cards here.</Text>
      </View>

      <View style={styles.cardSliderWrapper}>
        <View style={styles.cardsContainer}>
          {cards.map((item, index) => {
            const textColor = item.isGradient ? '#fff' : '#000';
            const cardHeight = index === 0 ? 305 : 258; // First card larger, second smaller

            const CardContent = () => (
              <View style={{ justifyContent: 'space-between', flex: 1 }}>
                <View>
                  <Text style={[styles.cardBalance, { color: textColor }]}>{item.balance}</Text>
                  <Text style={[styles.cardType, { color: textColor }]}>{item.type}</Text>
                </View>
                <View style={styles.cardBottomRow}>
                  <View>
                    <Text style={[styles.cardExpiry, { color: textColor }]}>{item.expiry}</Text>
                    <Text style={[styles.cardDigits, { color: textColor }]}>**** **** **** {item.lastDigits}</Text>
                  </View>
                  <Image source={item.logo} style={styles.cardLogo} />
                </View>
              </View>
            );

            const shadowStyle = {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.11,
              shadowRadius: 25,
              elevation: 10,
            };

            // First card with complex gradient background
            if (index === 0) {
              return (
                <View
                  key={item.id}
                  style={[
                    styles.card, 
                    shadowStyle, 
                    styles.firstCardGradient,
                    { height: cardHeight }
                  ]}
                >
                  <CardContent />
                </View>
              );
            }

            // Second card (regular)
            return item.isGradient ? (
              <FallbackGradient
                key={item.id}
                style={[styles.card, shadowStyle, { height: cardHeight }]}
              >
                <CardContent />
              </FallbackGradient>
            ) : (
              <View
                key={item.id}
                style={[
                  styles.card,
                  shadowStyle,
                  { backgroundColor: '#FFFFFF', height: cardHeight },
                ]}
              >
                <CardContent />
              </View>
            );
          })}
        </View>
      </View>

      {/* Recent Transactions Section */}
      <View style={styles.transactionsSection}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <FlatList
          data={transactions}
          renderItem={renderTransaction}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
          style={styles.transactionsList}
        />
      </View>
    </View>
  );
};

export default MyCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    width: width,
    height: 278,
    backgroundColor: "#4950F9",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: "hidden",
  },
  arrowWrapper: {
    position: "absolute",
    top: 68,
    left: 30,
    width: 26,
    height: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    transform: [{ rotate: "180deg" }],
  },
  headerText: {
    marginTop: 110,
    marginLeft: 30,
    maxWidth: 246,
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: 0,
    color: "#fff",
  },
  transactionsSection: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 30,
    paddingBottom: 31,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    color: "#000",
    marginBottom: 20,
  },
  transactionsList: {
    flex: 1,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 42,
    paddingHorizontal: 0,
    marginBottom: 20,
  },
  transactionLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
    resizeMode: "cover",
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: 0,
    color: "#000",
    marginBottom: 4,
  },
  transactionDate: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0,
    color: "rgba(185, 185, 185, 1)",
  },
  transactionRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  transactionAmount: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "right",
    color: "#000",
    marginRight: 10,
  },
  transactionArrow: {
    // No additional styling needed for the arrow
  },
  cardSliderWrapper: {
    position: 'absolute',
    top: 208, // 278 (header height) - 70px = 208px
    left: 0,
    right: 0,
    zIndex: 3,
  },
  cardsContainer: {
    flexDirection: 'row',
    paddingLeft: 32,
    alignItems: 'center', // This will center the second card vertically relative to the first
  },
  card: {
    borderRadius: 30,
    padding: 20,
    width: 209,
    marginRight: 25,
    justifyContent: 'space-between',
  },
  cardBalance: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: "Montserrat",
  },
  cardType: {
    fontWeight: '700',
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  cardExpiry: {
    fontWeight: '400',
    fontSize: 14,
    fontFamily: "Montserrat",
  },
  cardDigits: {
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 16,
    fontFamily: "Montserrat",
  },
  cardLogo: {
    width: 40,
    height: 33,
    marginBottom: 16,
  },
  firstCardGradient: {
    backgroundColor: '#4950F9',

  },
  cardBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});