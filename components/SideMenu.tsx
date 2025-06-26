import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    Dimensions,
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import SecArrowRight from "../assets/images/secArrowRight";
import SignOutBtn from "../components/SignOutBtn";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const MENU_WIDTH = screenWidth - 105;

interface SideMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

interface MenuItemProps {
  icon: any;
  title: string;
  onPress?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.menuItem, isPressed && styles.menuItemPressed]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}
      activeOpacity={1}
    >
      <Image source={icon} style={styles.menuIcon} />
      <Text style={styles.menuText}>{title}</Text>
      <SecArrowRight />
    </TouchableOpacity>
  );
};

export const SideMenu: React.FC<SideMenuProps> = ({ isVisible, onClose }) => {
  const slideAnim = useRef(new Animated.Value(-MENU_WIDTH)).current;
  const [shouldRender, setShouldRender] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -MENU_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setShouldRender(false);
      });
    }
  }, [isVisible]);

  const menuItems = [
    {
      icon: require("../assets/images/cards.png"),
      title: "Payments",
      route: "/transfer", // ✅ Navigates to transfer.tsx
    },
    {
      icon: require("../assets/images/transactions.png"),
      title: "Transactions",
      route: "/transactions",
    },
    {
      icon: require("../assets/images/cards.png"),
      title: "My Cards",
      route: "/myCards",
    },
    {
      icon: require("../assets/images/promotions.png"),
      title: "Promotions",
    },
    {
      icon: require("../assets/images/savings.png"),
      title: "Savings",
    },
  ];

  return (
    <Modal
      visible={shouldRender}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>

      <Animated.View
        style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}
      >
        <View style={styles.profileSection}>
          <Image
            source={require("../assets/images/pfp.png")}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Shasha Kolakola</Text>
            <Text style={styles.profileHandle}>@chyaber02</Text>
          </View>
        </View>

        <View style={styles.menuItems}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              onPress={() => {
                onClose();
                if (item.route) {
                  router.push(item.route); // ✅ Navigate
                } else {
                  console.log(`Pressed ${item.title}`);
                }
              }}
            />
          ))}
        </View>

        <View style={styles.signOutContainer}>
          <SignOutBtn size="small" onPress={onClose} />
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  menuContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: MENU_WIDTH,
    height: screenHeight,
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: 60,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    paddingBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 16,
    color: "#2B47FC",
  },
  profileHandle: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 15,
    color: "#2B47FC",
  },
  menuItems: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 16,
    marginBottom: 4,
    borderRadius: 8,
  },
  menuItemPressed: {
    backgroundColor: "rgba(242, 244, 248, 1)",
  },
  menuIcon: {
    marginRight: 16,
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  menuText: {
    flex: 1,
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 18,
    color: "#2B47FC",
  },
  signOutContainer: {
    paddingTop: 20,
    marginBottom: 81,
  },
});
