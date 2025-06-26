import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SideMenu } from "../../components/SideMenu";

export default function HomePage() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <LinearGradient
        colors={["#4950F9", "#1937FE"]}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={() => setIsMenuVisible(true)}
            activeOpacity={0.7}
          >
            <Image
              source={require("../../assets/images/menu.png")}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
          <Image
            source={require("../../assets/images/pfp.png")}
            style={styles.pfpIcon}
          />
        </View>
        <Text style={styles.title}>Good morning Emma,</Text>
      </LinearGradient>
      <View style={styles.card}>
        <View style={styles.cardColumn}>
          <Text style={styles.cardText}>Your total balance</Text>
          <Text style={styles.threeDots}>...</Text>
        </View>
        <Text style={styles.balance}>$850.00</Text>
        <Image
          source={require("../../assets/images/statistic.png")}
          style={styles.statisticImg}
        />
      </View>
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
          }}
        >
          <LinearGradient
            colors={["#6075FF", "#1433FF"]}
            start={{ x: 0.16, y: 0 }}
            end={{ x: 1.35, y: 1 }}
            style={styles.bottomButton}
          >
            <Text style={styles.bottomButtonText} numberOfLines={2}>
              Check your bank accounts
            </Text>
            <View style={styles.arrowWrapper}>
              <Image
                source={require("../../assets/images/secArrowRight.png")}
                style={{ width: 7, height: 12 }}
                resizeMode="contain"
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Side Menu */}
      <SideMenu
        isVisible={isMenuVisible}
        onClose={() => setIsMenuVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    padding: 32,
    width: 315,
    height: 321,
    margin: "auto",
    marginTop: -35,
    display: "flex",
    justifyContent: "space-between",
    borderRadius: 40,
    boxShadow: "0px 9px 50px 10px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  title: {
    fontSize: 32,
    marginLeft: 50,
    color: "rgba(255, 255, 255, 1)",
    width: 244,
  },
  header: {
    height: 278,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    overflow: "hidden",
  },
  balance: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 30,
    letterSpacing: 0,
    color: "rgba(45, 153, 255, 1)",
  },
  cardText: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0,
    color: "#000",
  },
  cardTextRow: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  threeDots: {
    fontSize: 18,
    width: 18,
    height: 18,
    position: "absolute",
    right: 0,
    textAlign: "center",
    lineHeight: 14,
    color: "rgba(58, 58, 58, 1)",
  },
  cardColumn: {
    display: "flex",
    flexDirection: "column",
  },
  menuIcon: {
    width: 30,
    height: 29,
  },
  pfpIcon: {
    width: 50,
    height: 50,
  },
  headerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    padding: 30,
  },
  statisticImg: {
    width: 250,
    height: 166,
  },
  bottomButtonContainer: {
    alignItems: "center",
    bottom: 30,
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
  arrowWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: 125,
  },
});