import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShowScreen from "../screens/ShowScreen";
import AppTabs from "../tabs/AppTabs";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={AppTabs}
        options={{
          title: "Movies App",
          headerStyle: { backgroundColor: "#34495e" },
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
      <Stack.Screen name="Show" component={ShowScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
