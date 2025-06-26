import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import NotificationItem from "../../components/NotificationItem";

export default function notifications() {
  const notificationsData = [
    {
      id: 1,
      name: "Georgo Armani",
      message: "sent you $15.",
      profileImage: require("../../assets/images/pfp.png"),
    },
    {
      id: 2,
      name: "Pedro Gonzales",
      message: "sent you $14.445.",
      profileImage: require("../../assets/images/pfp.png"),
    },
    {
      id: 3,
      name: "Nuked Nuke",
      message: "sent you $45.",
      profileImage: require("../../assets/images/pfp.png"),
    },
    {
      id: 4,
      name: "Nini Gordon",
      message: "sent you $1325.",
      profileImage: require("../../assets/images/pfp.png"),
    },
    {
      id: 5,
      name: "Chyaber Gonzales",
      message: "sent you $125.",
      profileImage: require("../../assets/images/pfp.png"),
    },
    {
      id: 6,
      name: "Your Dog",
      message: "sent you $10.",
      profileImage: require("../../assets/images/pfp.png"),
    },
    {
      id: 7,
      name: "Georgo Armani",
      message: "sent you $15.",
      profileImage: require("../../assets/images/pfp.png"),
    },
    {
      id: 8,
      name: "Georgo Armani",
      message: "sent you $15.",
      profileImage: require("../../assets/images/pfp.png"),
    },
    {
      id: 9,
      name: "Georgo Armani",
      message: "sent you $15.",
      profileImage: require("../../assets/images/pfp.png"),
    },
  ];

  const handleNotificationPress = (notification: { id: number; name: string; message: string; profileImage: any; }) => {
    console.log("Notification pressed:", notification);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="rgba(61, 86, 250, 1)"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="rgba(61, 86, 250, 1)"
        />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          You can check your{"\n"}notifications here.
        </Text>
      </View>

      {/* Notifications List */}
      <ScrollView
        style={styles.notificationsList}
        showsVerticalScrollIndicator={false}
      >
        {notificationsData.map((notification) => (
          <NotificationItem
            key={notification.id}
            profileImage={notification.profileImage}
            name={notification.name}
            message={notification.message}
            onPress={() => handleNotificationPress(notification)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 44,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f3f4",
    marginTop: 40,
    marginHorizontal: 39,
    marginBottom: 0,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    height: 45,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "rgba(61, 86, 250, 1)",
  },
  headerContainer: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  headerText: {
    color: "#1a1a1a",
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 24,
    marginLeft: 30,
  },
  notificationsList: {
    flex: 1,
    marginTop: 40,
  },
});
