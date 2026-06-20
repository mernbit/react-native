import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const Shop = () => {
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
      <View style={{ marginTop: 28, marginBottom: 12 }}>
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
          gap: 8,
          backgroundColor: '#f2f2f2',
          padding: 2,
          borderRadius: 50,
        }}
      >
        {tabs.map(tab => (
          <View
            key={tab.id}
            onPress={() => {
              console.log(tab.name);
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
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Shop;

const styles = StyleSheet.create({});
