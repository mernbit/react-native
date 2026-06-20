import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme } from 'react-native-paper';
import BottomBar from '../components/BottomBar';
import Repairs from './Repairs';
import Shop from './Shop';
import Spendings from './Spendings';
import Sellers from './Sellers';
import Resell from './Resell';
import { useTabContext } from '../contexts/TabContext';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const { setActiveTab } = useTabContext();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };
  return (
    <NavigationContainer
      theme={theme}
      onStateChange={state => {
        const route = state.routes[state.index];
        setActiveTab(route.name);
      }}
    >
      <View style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="Repairs"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Repairs" component={Repairs} />
          <Stack.Screen name="Shop" component={Shop} />
          <Stack.Screen name="Resell" component={Resell} />
          <Stack.Screen name="Spendings" component={Spendings} />
          <Stack.Screen name="Sellers" component={Sellers} />
        </Stack.Navigator>
        <BottomBar />
      </View>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
