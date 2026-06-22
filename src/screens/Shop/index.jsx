import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ShopMain from './ShopMain';
import AddProduct from './AddProduct';
const Shop = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ShopMain" component={ShopMain} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
    </Stack.Navigator>
  );
};

export default Shop;
