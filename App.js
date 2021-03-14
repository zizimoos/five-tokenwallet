import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Text } from "react-native";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1612831200752-a70d1d1bb83b?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      require("./assets/splash.png"),
    ]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <Text>Hello world!</Text>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    ></AppLoading>
  );
}
