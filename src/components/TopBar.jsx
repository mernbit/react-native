import { StyleSheet, View } from 'react-native';
import React from 'react';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { IconButton, Text } from 'react-native-paper';

const TopBar = () => {
  return (
    <View
      style={{
        marginTop: 8,
        paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text variant="titleMedium" style={{ color: 'gray' }}>
        Hashir Solutions
      </Text>
      <IconButton icon={() => <MaterialDesignIcons name="cog" size={30} />} />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({});
