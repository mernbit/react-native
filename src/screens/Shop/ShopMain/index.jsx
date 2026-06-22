import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import ProductLibrary from './ProductLibrary';
import Analysis from './Analysis';
import { useNavigation } from '@react-navigation/native';

const Shop = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Library');
  const tabs = [
    {
      id: 1,
      label: 'Library',
      name: 'Product Library',
    },
    {
      id: 2,
      label: 'Analysis',
      name: 'Analysis',
    },
  ];
  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
      <View style={{ marginTop: 16, marginBottom: 12 }}>
        <Text
          variant="displaySmall"
          style={{ fontWeight: 'semibold', marginBottom: 12 }}
        >
          Shop Analytics
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 0,
          backgroundColor: '#f2f2f2',
          paddingVertical: 2,
          borderRadius: 50,
        }}
      >
        {tabs.map(tab => (
          <Pressable
            key={tab.id}
            onPress={() => {
              setActiveTab(tab.label);
            }}
            style={{
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 12,
              backgroundColor: activeTab === tab.label ? '#000' : '#f2f2f2',
              borderRadius: 24,
            }}
          >
            <Text
              style={{
                color: activeTab === tab.label ? '#fff' : 'black',
                fontWeight: 'bold',
              }}
            >
              {tab.name}
            </Text>
          </Pressable>
        ))}
      </View>
      <View>{activeTab === 'Library' ? <ProductLibrary /> : <Analysis />}</View>
    </ScrollView>
  );
};

export default Shop;

const styles = StyleSheet.create({});
