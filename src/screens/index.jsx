import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { DefaultTheme } from 'react-native-paper';
import BottomBar from '../components/BottomBar';
import Repairs from './Repairs';
import Shop from './Shop';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };
  return (
    <NavigationContainer theme={theme}>
      <View style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="Repairs"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Repairs" component={Repairs} />
          <Stack.Screen name="Shop" component={Shop} />
        </Stack.Navigator>
        <BottomBar />
      </View>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
