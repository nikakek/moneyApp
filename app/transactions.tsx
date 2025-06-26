import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Circle, Path, Svg } from "react-native-svg";
import ArrowRight from "../assets/images/arrowRight";
import SecArrowRight from "../assets/images/secArrowRight";

const { width } = Dimensions.get("window");

const SearchIcon = () => (
  <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <Circle
      cx="11"
      cy="11"
      r="8"
      stroke="rgba(128, 224, 255, 1)"
      strokeWidth="2"
      fill="none"
    />
    <Path
      d="M21 21L16.65 16.65"
      stroke="rgba(128, 224, 255, 1)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

const Transactions = () => {
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState("");

  const cards = [
    {
      id: 1,
      title: "Travel",
      amount: "$1555.00",
      bgColor: "rgba(255, 135, 135, 1)",
    },
    {
      id: 2,
      title: "Travel",
      amount: "$1555.00",
      bgColor: "rgba(255, 197, 110, 1)",
    },
    {
      id: 3,
      title: "Travel",
      amount: "$1555.00",
      bgColor: "rgba(58, 249, 239, 1)",
    },
    {
      id: 4,
      title: "Travel",
      amount: "$1555.00",
      bgColor: "rgba(199, 47, 248, 0.58)",
    },
  ];

  const transactions = [
    {
      id: 1,
      title: "Shopping",
      date: "15 Mar 2025, 15:00 PM",
      amount: "-120$",
      icon: require("../assets/images/pfp.png"),
      iconBg: "rgba(255, 197, 110, 1)",
    },
    {
      id: 2,
      title: "Medicine",
      date: "18 Feb 2024, 11:00 AM",
      amount: "-555.00$",
      icon: require("../assets/images/pfp.png"),
      iconBg: "rgba(199, 47, 248, 0.58)",
    },
    {
      id: 3,
      title: "Sport",
      date: "12 Feb 2024, 16:32 PM",
      amount: "-11.555.00$",
      icon: require("../assets/images/pfp.png"),
      iconBg: "rgba(58, 249, 239, 1)",
    },
    {
      id: 4,
      title: "Travel",
      date: "11 Feb 2024, 12:52 PM",
      amount: "-1.555.00$",
      icon: require("../assets/images/pfp.png"),
      iconBg: "rgba(255, 135, 135, 1)",
    },
    {
      id: 5,
      title: "Sport",
      date: "1 Jan 2024, 11:32 PM",
      amount: "-252.07$",
      icon: require("../assets/images/pfp.png"),
      iconBg: "rgba(58, 249, 239, 1)",
    },
    {
      id: 6,
      title: "Medicine",
      date: "18 Oct 2023, 11:00 AM",
      amount: "-15.99$",
      icon: require("../assets/images/pfp.png"),
      iconBg: "rgba(199, 47, 248, 0.58)",
    },
  ];

  const renderTransaction = ({ item }) => (
    <TouchableOpacity style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <View
          style={[
            styles.transactionIconWrapper,
            { backgroundColor: item.iconBg },
          ]}
        >
          <Image source={item.icon} style={styles.transactionIcon} />
        </View>
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <Text style={styles.transactionDate}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.transactionRight}>
        <Text style={styles.transactionAmount}>{item.amount}</Text>
        <SecArrowRight width={10} height={18} color="rgba(199, 199, 199, 1)" />
      </View>
    </TouchableOpacity>
  );

  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.mainContent}
        activeOpacity={1}
        onPress={() => isExpanded && setIsExpanded(false)}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.arrowWrapper}
            onPress={() => navigation.goBack()}
          >
            <ArrowRight width={26} height={21} style={styles.arrow} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Transactions</Text>
          <Text style={styles.subtitle}>Your total expenses</Text>
          <Text style={styles.amount}>$14,053.06</Text>
        </View>

        <Text style={styles.newExpensesLabel}>Your total expenses</Text>

        <View style={styles.cardsContainer}>
          {cards.map((card) => (
            <View
              key={card.id}
              style={[styles.card, { backgroundColor: card.bgColor }]}
            >
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardAmount}>{card.amount}</Text>
            </View>
          ))}
        </View>

        {/* Credit Card Repayment Button - 20px below cards */}
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <LinearGradient
              colors={["#6075FF", "#1433FF"]}
              start={{ x: 0.16, y: 0 }}
              end={{ x: 1.35, y: 1 }}
              style={styles.bottomButton}
            >
              <Text style={styles.bottomButtonText} numberOfLines={2}>
                Credit card repayment
              </Text>
              <View style={styles.arrowWrapperButton}>
                <Image
                  source={require("../assets/images/secArrowRight.png")}
                  style={{ width: 7, height: 12 }}
                  resizeMode="contain"
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.transactionsSection,
          isExpanded && styles.transactionsSectionExpanded,
        ]}
        onPress={toggleExpansion}
        activeOpacity={1}
      >
        <View style={styles.handleBar} />

        <View style={styles.searchContainer}>
          <SearchIcon />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="rgba(128, 224, 255, 1)"
            value={searchText}
            onChangeText={setSearchText}
            onFocus={() => setIsExpanded(true)}
          />
        </View>

        {isExpanded && (
          <FlatList
            data={transactions}
            renderItem={renderTransaction}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={true}
            style={styles.transactionsList}
            showsVerticalScrollIndicator={false}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Transactions;

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
  arrowWrapperButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 125,
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
  subtitle: {
    marginTop: 50,
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 22,
    lineHeight: 22,
    color: "rgba(128, 224, 255, 1)",
    textAlign: "center",
  },
  amount: {
    marginTop: 20,
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 26,
    lineHeight: 26,
    color: "#FFFFFF",
    textAlign: "center",
  },
  newExpensesLabel: {
    marginTop: 35,
    marginLeft: 30,
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 22,
    color: "#000000",
  },
  cardsContainer: {
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: 13,
    rowGap: 13,
    paddingHorizontal: 30,
  },
  card: {
    width: 160,
    height: 100,
    borderRadius: 25,
    paddingTop: 15,
    paddingLeft: 10,
  },
  cardTitle: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  cardAmount: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 20,
    color: "#fff",
  },
  transactionsSection: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#4950F9",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 30,
    paddingTop: 50,
    paddingBottom: 31,
    height: 130,
  },
  transactionsSectionExpanded: {
    height: 553,
  },
  handleBar: {
    width: 50,
    height: 4,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 2,
    alignSelf: "center",
    position: "absolute",
    top: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    backgroundColor: "rgba(5, 25, 158, 1)",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 16,
    color: "#fff",
    marginLeft: 10,
  },
  transactionsList: {
    flex: 1,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    marginBottom: 15,
  },
  transactionLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  transactionIconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  transactionIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    resizeMode: "cover",
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: 18,
    color: "#fff",
    marginBottom: 4,
  },
  transactionDate: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.7)",
  },
  transactionRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  transactionAmount: {
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: 16,
    color: "#fff",
    marginRight: 10,
  },
  bottomButton: {
    width: 315,
    height: 125,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 32,
  },
  bottomButtonText: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0,
    color: "#fff",
    maxWidth: 154,
    textTransform: "capitalize",
  },
});
