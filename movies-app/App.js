import React from 'react';
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import AppStack from "./src/components/stacks/AppStack"; 

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        {/* Navigation setup */}
        <NavigationContainer>
          {/* Stack navigation for the app */}
          <AppStack />
        </NavigationContainer>
        {/* Status bar configuration */}
        <StatusBar style="auto" />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
