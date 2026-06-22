import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Form = ({ state, dispatch }) => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const stored = await AsyncStorage.getItem('chips');
    const data = stored ? JSON.parse(stored) : [];
    console.log(data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <View style={{ paddingHorizontal: 16, marginTop: 18 }}>
      <TextInput
        mode="outlined"
        cursorColor="gray"
        label="Product Name"
        outlineColor="transparent"
        activeOutlineColor="transparent"
        outlineStyle={{ borderRadius: 12 }}
        style={styles.input}
        value={state.name}
        onChangeText={val => dispatch(prev => ({ ...prev, name: val }))}
      />
      {/* <DropDownPicker /> */}
      <TextInput
        mode="outlined"
        cursorColor="gray"
        label="Stock Count"
        outlineColor="transparent"
        activeOutlineColor="transparent"
        outlineStyle={{ borderRadius: 12 }}
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        cursorColor="gray"
        label="Cost Price"
        outlineColor="transparent"
        activeOutlineColor="transparent"
        outlineStyle={{ borderRadius: 12 }}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        mode="outlined"
        cursorColor="gray"
        label="Sale Price"
        outlineColor="transparent"
        activeOutlineColor="transparent"
        outlineStyle={{ borderRadius: 12 }}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        mode="outlined"
        cursorColor="gray"
        label="Units Sold"
        outlineColor="transparent"
        activeOutlineColor="transparent"
        outlineStyle={{ borderRadius: 12 }}
        style={styles.input}
        keyboardType="numeric"
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f2f2f2',
    marginBottom: 12,
    paddingVertical: 12,
  },
});
