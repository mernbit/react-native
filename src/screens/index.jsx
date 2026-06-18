import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Repairs from './Repairs';
import { DefaultTheme } from 'react-native-paper';
import BottomBar from '../components/BottomBar';

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
    <View style={{ flex: 1 }}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName="Repairs"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Repairs" component={Repairs} />
        </Stack.Navigator>
      </NavigationContainer>
      <BottomBar />
    </View>
  );
};

export default Routes;

const styles = StyleSheet.create({});
