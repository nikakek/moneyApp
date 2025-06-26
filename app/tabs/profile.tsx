import SignOutButton from "@/components/SignOutBtn";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.profile}>
        <Image
          source={require("../../assets/images/pfp.png")}
          style={styles.image}
          contentFit="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.status}>Online</Text>
        </View>
      </View>

      <View style={styles.fieldsContainer}>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Username</Text>
          <Text style={styles.fieldValue}>chyaber02</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>First Name</Text>
          <Text style={styles.fieldValue}>Shasha</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Last Name</Text>
          <Text style={styles.fieldValue}>Kolakola</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Date Of Birth</Text>
          <Text style={styles.fieldValue}>20-03-1997</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <SignOutButton size="big" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingHorizontal: 32,
  },
  title: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 40,
    lineHeight: 40,
    letterSpacing: 0,
    marginTop: 100,
    color: "rgba(0, 0, 0, 1)",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  image: {
    width: 60,
    height: 60,
  },
  textContainer: {
    marginLeft: 12,
  },
  name: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 19.2,
    lineHeight: 19.2,
    letterSpacing: 0,
    color: "rgba(39, 67, 253, 1)",
  },
  status: {
    fontFamily: "Montserrat",
    fontWeight: "300",
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: 0,
    color: "rgba(39, 67, 253, 1)",
  },

  fieldsContainer: {
    marginTop: 40,
  },
  field: {
    marginBottom: 25,
  },
  fieldTitle: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0,
    textTransform: "capitalize",
    color: "rgba(58, 58, 58, 1)",
  },
  fieldValue: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(222, 225, 239, 1)",
    paddingTop: 16,
    paddingBottom: 8,
    color: "rgba(39, 67, 253, 1)",
  },

  buttonContainer: {
    marginTop: 45,
  },
});
