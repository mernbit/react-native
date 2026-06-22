import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const AddProduct = () => {
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
    <View style={{ paddingHorizontal: 16 }}>
      <View>
        <Text>Product Information</Text>
      </View>
      <View>
        <Text>Product Images</Text>
      </View>
      <View>
        <Text>Product Pricing</Text>
      </View>
      <View>
        <Text>Product Stock</Text>
      </View>
    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({});
