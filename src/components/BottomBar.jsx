import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Divider, IconButton } from 'react-native-paper';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';

const BottomBar = () => {
  // const route = useRoute();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Repairs');
  const BottomItems = [
    {
      id: 1,
      name: 'Repair',
      icon: 'wrench',
      route: 'Repairs',
    },
    {
      id: 2,
      name: 'Shop',
      icon: 'store',
      route: 'Shop',
    },
    {
      id: 3,
      name: 'Spendings',
      icon: 'finance',
      route: 'Spendings',
    },
    {
      id: 4,
      name: 'Resell',
      icon: 'cellphone',
      route: 'Resell',
    },
    {
      id: 5,
      name: 'Sellers',
      icon: 'account-tie',
      route: 'Sellers',
    },
  ];
  const BottomBarNavTo = route => {
    if (route === activeTab) return;
    setActiveTab(route);
    navigation.navigate(route);
  };
  // console.log(navigation);
  return (
    <View>
      <Divider />
      <View style={{ backgroundColor: 'white', paddingHorizontal: 12 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 12,
            gap: 4,
          }}
        >
          {BottomItems.map(item => (
            <View key={item.id}>
              <Pressable
                style={{ display: 'flex', alignItems: 'center' }}
                onPress={() => {
                  BottomBarNavTo(item.route);
                }}
              >
                <IconButton
                  key={item.name}
                  icon={() => (
                    <View
                      style={{
                        backgroundColor:
                          activeTab === item.route ? 'black' : 'transparent',
                        borderRadius: 100,
                        padding: 8,
                      }}
                    >
                      <MaterialDesignIcons
                        name={item.icon}
                        size={24}
                        color={activeTab === item.route ? 'white' : 'gray'}
                      />
                    </View>
                  )}
                />
                <Text
                  style={{ color: activeTab === item.route ? 'black' : 'gray' }}
                >
                  {item.name}
                </Text>
              </Pressable>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({});
