import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

const pagesData = [
  {
    image: require("../assets/images/savingImage.png"),
    title: "Save your money conveniently.",
    subtitle: "Get 5% cash back for each transaction and spend it easily.",
  },
  {
    image: require("../assets/images/safetyBox.png"),
    title: "Secure your money for free and get rewards.",
    subtitle: "Get the most secure payment app ever and enjoy it.",
  },
  {
    image: require("../assets/images/trading.png"),
    title: "Enjoy commission-free stock trading.",
    subtitle: "Online investing has never been easier than it is right now.",
  },
];

export default function Index() {
  const { width } = useWindowDimensions();
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef();

  const handleNext = () => {
    if (currentPage < pagesData.length - 1) {
      setCurrentPage(currentPage + 1);
      flatListRef.current?.scrollToIndex({
        index: currentPage + 1,
        animated: true,
      });
    }
  };

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newPage = Math.round(offsetX / width);

    // Only allow backward scrolling
    if (newPage > currentPage) {
      flatListRef.current?.scrollToIndex({
        index: currentPage,
        animated: true,
      });
    } else if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={[styles.pageContainer, { width }]}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
        contentFit="cover"
      />
      <Image
        source={item.image}
        style={[
          styles.image,
          index === 1 && { width: 246, height: 203 },
          index === 2 && { width: 246, height: 203 },
        ]}
        contentFit="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={pagesData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        scrollEnabled={false}
      />

      <View style={styles.navigationContainer}>
        <View style={styles.dotContainer}>
          {pagesData.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentPage === index && styles.activeDot]}
            />
          ))}
        </View>
        <TouchableOpacity onPress={handleNext}>
          <LinearGradient
            colors={["#4960F9", "#1433FF"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.button}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>
                {currentPage === pagesData.length - 1 ? "Get Started" : "Next"}
              </Text>
              {currentPage !== pagesData.length - 1 && (
                <Image
                  source={require("../assets/images/arrowRight.png")}
                  style={styles.buttonIcon}
                  contentFit="contain"
                />
              )}
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  logo: {
    width: 71,
    height: 69,
    borderRadius: 10,
    marginTop: 90,
  },
  image: {
    width: 280,
    height: 202,
    alignSelf: "center",
  },
  textContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 25,
    lineHeight: 36,
    color: "rgba(39, 67, 253, 1)",
    maxWidth: 227,
  },
  subtitle: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 28,
    color: "rgba(124, 42, 255, 1)",
    maxWidth: 271,
    marginTop: 26,
  },
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  dotContainer: {
    flexDirection: "row",
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(39, 67, 253, 0.3)",
  },
  activeDot: {
    backgroundColor: "#2743FD",
    width: 22,
  },
  button: {
    width: 153,
    height: 64,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 39,
  },
  buttonIcon: {
    width: 19,
    height: 13.3,
  },
});
