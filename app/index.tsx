import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { Button } from "../components/Button";

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
  const flatListRef = useRef<FlatList<any>>(null);

  const handleNext = () => {
    if (currentPage < pagesData.length - 1) {
      setCurrentPage(currentPage + 1);
      flatListRef.current?.scrollToIndex({
        index: currentPage + 1,
        animated: true,
      });
    } else {
      // Navigate to welcome page when on last page
      router.dismissTo("/welcome");
    }
  };

  const handleScroll = (event: {
    nativeEvent: { contentOffset: { x: any } };
  }) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newPage = Math.round(offsetX / width);
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  };

  type PageData = {
    image: any;
    title: string;
    subtitle: string;
  };

  const renderItem = ({ item, index }: { item: PageData; index: number }) => (
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
          index === 1 && { width: 187, height: 202 },
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
        scrollEnabled={true}
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
        <View
          style={[
            styles.buttonWrapper,
            currentPage === pagesData.length - 1 && styles.wideButtonWrapper,
          ]}
        >
          <Button
            text={currentPage === pagesData.length - 1 ? "Get Started" : "Next"}
            onPress={handleNext}
            showArrow={currentPage !== pagesData.length - 1}
            centered={currentPage === pagesData.length - 1}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  pageContainer: {
    flex: 1,
    alignItems: "center",
    height: 704,
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
    marginTop: 80,
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
    marginTop: 125,
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
    marginBottom: 30,
  },
  dotContainer: {
    flexDirection: "row",
    gap: 8,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    backgroundColor: "rgba(39, 67, 253, 0.3)",
  },
  activeDot: {
    backgroundColor: "#2743FD",
    borderRadius: 4,
    width: 22,
  },
  buttonWrapper: {
    width: 153,
    height: 64,
  },
  wideButtonWrapper: {
    width: 189,
  },
});
