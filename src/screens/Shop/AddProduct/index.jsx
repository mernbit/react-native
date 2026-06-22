import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Divider, IconButton } from 'react-native-paper';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Text } from 'react-native-paper';
import Form from './Form';
const AddProduct = ({ navigation }) => {
  const initState = {
    name: '',
    category: '',
    costPrice: 0,
    sellingPrice: 0,
    stock: 0,
    unitSold: 0,
    images: [],
  };

  const [state, setState] = useState(initState);
  return (
    <ScrollView>
      <View style={styles.heading}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <IconButton
            icon={() => <MaterialDesignIcons name="arrow-left" size={24} />}
            onPress={() => navigation.goBack()}
          />
          <Text variant="titleLarge">Add Product</Text>
        </View>
        <Button mode="contained" style={styles.saveBtn} onPress={() => {}}>
          Save
        </Button>
      </View>
      <Divider />
      {/* Add product form */}
      <Form dispatch={setState} state={state} />
    </ScrollView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  heading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  saveBtn: {
    backgroundColor: 'black',
    borderRadius: 50,
  },
});
