import CheckmarkBtn from "@/components/CheckmarkBtn";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { Stack, router } from "expo-router";
import React, { useMemo, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, TextInput } from "react-native-paper";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const isFormComplete = useMemo(() => {
    return (
      username.length > 0 &&
      firstName.length > 0 &&
      lastName.length > 0 &&
      dateOfBirth.length > 0 &&
      selectedImage.length > 0
    );
  }, [username, firstName, lastName, dateOfBirth, selectedImage]);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You need to allow access to your photos to upload an image!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets?.[0]?.uri) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleComplete = () => {
    if (isFormComplete) {
      router.dismissTo("/homePage");
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.gradient} />
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.uploadImageButton}>
          <Image
            source={
              selectedImage
                ? { uri: selectedImage }
                : require("../assets/images/uploadImage.png")
            }
            style={styles.uploadImage}
            contentFit="cover"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            placeholder="Your username"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            underlineColor="rgba(255, 255, 255, 1)"
            activeUnderlineColor="rgba(255, 255, 255, 1)"
            textColor="#fff"
            mode="flat"
            right={
              username.length > 0 ? (
                <TextInput.Icon
                  icon={() => (
                    <Image
                      source={require("../assets/images/checkmark.png")}
                      style={{
                        width: 18,
                        height: 13,
                        tintColor: "rgba(203, 62, 249, 1)",
                      }}
                      contentFit="contain"
                    />
                  )}
                />
              ) : null
            }
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            style={styles.input}
            placeholder="Your name"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            underlineColor="rgba(255, 255, 255, 1)"
            activeUnderlineColor="rgba(255, 255, 255, 1)"
            textColor="#fff"
            mode="flat"
            right={
              firstName.length > 0 ? (
                <TextInput.Icon
                  icon={() => (
                    <Image
                      source={require("../assets/images/checkmark.png")}
                      style={{
                        width: 18,
                        height: 13,
                        tintColor: "rgba(203, 62, 249, 1)",
                      }}
                      contentFit="contain"
                    />
                  )}
                />
              ) : null
            }
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
            placeholder="Your last name"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            underlineColor="rgba(255, 255, 255, 1)"
            activeUnderlineColor="rgba(255, 255, 255, 1)"
            textColor="#fff"
            mode="flat"
            right={
              lastName.length > 0 ? (
                <TextInput.Icon
                  icon={() => (
                    <Image
                      source={require("../assets/images/checkmark.png")}
                      style={{
                        width: 18,
                        height: 13,
                        tintColor: "rgba(203, 62, 249, 1)",
                      }}
                      contentFit="contain"
                    />
                  )}
                />
              ) : null
            }
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Date Of Birth</Text>
          <TextInput
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            style={styles.input}
            placeholder="Your birthday (dd-mm-yyyy)"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            underlineColor="rgba(255, 255, 255, 1)"
            activeUnderlineColor="rgba(255, 255, 255, 1)"
            textColor="#fff"
            mode="flat"
            right={
              dateOfBirth.length > 0 ? (
                <TextInput.Icon
                  icon={() => (
                    <Image
                      source={require("../assets/images/checkmark.png")}
                      style={{
                        width: 18,
                        height: 13,
                        tintColor: "rgba(203, 62, 249, 1)",
                      }}
                      contentFit="contain"
                    />
                  )}
                />
              ) : null
            }
          />
        </View>
      </View>
      <CheckmarkBtn disabled={!isFormComplete} onPress={handleComplete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(25, 55, 254, 1)",
  },
  imageContainer: {
    alignSelf: "center",
    marginTop: 83,
  },
  uploadImageButton: {
    width: 99,
    height: 99,
  },
  uploadImage: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  inputsContainer: {
    width: "100%",
    paddingHorizontal: 35,
    marginTop: 40,
  },
  inputWrapper: {
    marginBottom: 24,
  },
  label: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 8,
    fontFamily: "Inter",
  },
  input: {
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "Inter",
    height: 40,
    width: "100%",
    paddingHorizontal: 0,
  },
});
