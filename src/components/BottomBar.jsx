import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Divider, IconButton } from 'react-native-paper';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

const BottomBar = () => {
  const [activeTab, setActiveTab] = useState();
  return (
    <View>
      <Divider />
      <View style={{ backgroundColor: 'white', paddingHorizontal: 12 }}>
        <View>
          <IconButton
            icon={() => (
              <MaterialDesignIcons name="Build" size={24} color="black" />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({});
