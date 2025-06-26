import ArrowRightSvg from "@/assets/images/secArrowRight";
import React from "react";
import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface NotificationItemProps {
  profileImage: ImageSourcePropType;
  name: string;
  message: string;
  onPress?: () => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  profileImage,
  name,
  message,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profileImage} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>
          <Text style={styles.senderName}>{name?.split(" ")[0] || name}</Text>
          <Text style={styles.messageText}> {message}</Text>
        </Text>
      </View>
      <View style={styles.arrowContainer}>
        <ArrowRightSvg />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    marginHorizontal: 16,
    marginVertical: 4,
    borderBottomColor: "rgba(222, 225, 239, 1)",
    borderBottomWidth: 1,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 11,
    marginRight: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1.72,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.31,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 1)",
    marginBottom: 2,
    fontFamily: "Montserrat",
    fontWeight: "400",
    lineHeight: 16,
    letterSpacing: 0,
  },
  message: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0,
    color: "rgba(61, 86, 250, 1)",
    marginTop: 5,
  },
    messageText: {
    },
  senderName: {
    color: "rgba(61, 86, 250, 1)",
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0,
  },
  arrowContainer: {
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NotificationItem;
