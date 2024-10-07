import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IndexScreen from "../screens/IndexScreen";
import SearchResultContainer from "../containers/SearchResultContainer";
import TvShowContainer from "../containers/TvShowContainer";

const Tab = createMaterialTopTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Index" component={IndexScreen} />
      <Tab.Screen name="Search Results" component={SearchResultContainer} />
      <Tab.Screen name="TV Shows" component={TvShowContainer} />
    </Tab.Navigator>
  );
};

export default AppTabs;
