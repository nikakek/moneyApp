import HomeTabIcon from "@/assets/images/homeTab";
import NotificationsTabIcon from "@/assets/images/notificationsTab";
import ProfileTabIcon from "@/assets/images/profileTab";

import { Tabs } from "expo-router";
import { Platform, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 108,
          paddingTop: Platform.OS === "ios" ? 24 : 16,
          paddingBottom: Platform.OS === "ios" ? 34 : 16,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 20 },
          shadowOpacity: 0.15,
          shadowRadius: 50,
          elevation: 15,
        },
        tabBarLabel: () => null,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <HomeTabIcon color={focused ? "#4960F9" : "#9E9E9E"} />
              <View
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: 2.5,
                  backgroundColor: focused ? "#4960F9" : "transparent",
                  marginTop: 5,
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <NotificationsTabIcon color={focused ? "#4960F9" : "#9E9E9E"} />
              <View
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: 2.5,
                  backgroundColor: focused ? "#4960F9" : "transparent",
                  marginTop: 5,
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <ProfileTabIcon color={focused ? "#4960F9" : "#9E9E9E"} />
              <View
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: 2.5,
                  backgroundColor: focused ? "#4960F9" : "transparent",
                  marginTop: 5,
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
