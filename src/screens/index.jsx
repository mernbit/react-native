import React, { useEffect, useRef } from 'react';
import {
  BackHandler,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { DefaultTheme } from 'react-native-paper';
import BottomBar from '../components/BottomBar';
import Repairs from './Repairs';
import Shop from './Shop';
import Spendings from './Spendings';
import Sellers from './Sellers';
import Resell from './Resell';
import { useTabContext } from '../contexts/TabContext';
const navigationRef = createNavigationContainerRef();

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const { activeTab, setActiveTab } = useTabContext();
  const backPressedOnce = useRef(false);
  const HOME_SCREEN = 'Repairs';
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };
  useEffect(() => {
    const onBackPress = () => {
      if (activeTab !== HOME_SCREEN) {
        // Navigate back to home screen
        if (navigationRef.isReady()) {
          navigationRef.reset({ index: 0, routes: [{ name: HOME_SCREEN }] });
        }
        return true; // prevent default (closing app)
      }

      // Already on home — handle double-press to exit
      if (backPressedOnce.current) {
        BackHandler.exitApp();
        return true;
      }

      backPressedOnce.current = true;
      ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);

      const timer = setTimeout(() => {
        backPressedOnce.current = false;
      }, 2000);

      return true; // prevent default close
    };

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => subscription.remove();
  }, [activeTab]);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={theme}
      onStateChange={state => {
        const route = state.routes[state.index];
        setActiveTab(route.name);
        backPressedOnce.current = false; // reset on any navigation
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
