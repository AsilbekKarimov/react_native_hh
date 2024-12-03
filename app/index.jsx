import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons } from "../constants";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";

const App = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex flex-1 bg-lightWhite">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <Text
              style={{ color: COLORS.primary, fontSize: 20, paddingRight: 10 }}
            >
              ASd
            </Text>
          ),
          headerRight: () => (
            <Text
              style={{ color: COLORS.primary, fontSize: 20, paddingRight: 10 }}
            >
              ASd
            </Text>
          ),
        }}
      />
      {/* Add more content below */}
    </SafeAreaView>
  );
};

export default App;
