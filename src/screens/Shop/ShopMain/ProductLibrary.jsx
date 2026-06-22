import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import uuid from 'react-native-uuid';
import {
  Card,
  Chip,
  Searchbar,
  Modal,
  Button,
  Text,
  Portal,
  TextInput,
} from 'react-native-paper';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ProductLibrary = () => {
  const navigation = useNavigation();
  const [customChip, setCustomChip] = useState([]);
  const [visible, setVisible] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const chipItem = [
    {
      id: '89808e2f-d834-409a-bdc8-40060ae20d74',
      name: 'Batteries',
      custom: false,
    },
    {
      id: 'f0e762a5-f23d-45b5-8350-6459c0825575',
      name: 'Chargers',
      custom: false,
    },
    {
      id: '124c43d3-017a-4fe7-a2d0-113bfbf52dcc',
      name: 'Cables',
      custom: false,
    },
    {
      id: '196109e7-e0fe-4755-8364-3394d196f125',
      name: 'Cases',
      custom: false,
    },
    {
      id: '09d02feb-e9d0-4688-adf6-0ca4335457fe',
      name: 'Handsfree',
      custom: false,
    },
    {
      id: 'afcd24f5-9b69-4ffb-95f5-585c10154fe2',
      name: 'Memory Cards',
      custom: false,
    },
    {
      id: '1c48b2e8-5cf4-4c06-b77b-2d1fc3713a36',
      name: 'USB',
      custom: false,
    },
  ];

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const storeCategory = async () => {
    await AsyncStorage.setItem('chips', JSON.stringify(category));
  };

  const category = useMemo(
    () =>
      [...chipItem, ...customChip].sort((a, b) => a.name.localeCompare(b.name)),
    [customChip],
  );

  useEffect(() => {
    const loadCustomChips = async () => {
      const stored = await AsyncStorage.getItem('customChips');
      if (stored) setCustomChip(JSON.parse(stored));
    };
    loadCustomChips();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('customChips', JSON.stringify(customChip));
  }, [customChip]);

  const handleAddCategory = async chip => {
    const newChip = {
      id: uuid.v4(),
      name: chip.trim(),
      custom: true,
    };
    setCustomChip(prev => [...prev, newChip]);
    setCategoryName('');
    setVisible(false);
  };
  return (
    <View>
      <View>
        <Searchbar placeholder="Search products" style={styles.search} />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          {category.map(item => {
            storeCategory([item]);
            return (
              <Chip key={item.id} style={styles.chips}>
                <Text>{item.name}</Text>
              </Chip>
            );
          })}
          <Chip
            icon={() => <MaterialDesignIcons name="plus" size={16} />}
            style={styles.chips}
            onPress={() => showDialog()}
          >
            <Text>Add New</Text>
          </Chip>
        </View>
      </ScrollView>
      <Card style={styles.card}>
        <Card.Content>
          <Text>Stock: X units, Sold: Y units</Text>
        </Card.Content>
      </Card>
      <Pressable
        onPress={() => navigation.navigate('AddProduct')}
        style={styles.addProduct}
      >
        <Text variant="titleMedium" style={{ color: 'gray' }}>
          + Add Product
        </Text>
      </Pressable>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideDialog}
          contentContainerStyle={styles.modal}
          dismissableBackButton={true}
        >
          <Text variant="headlineSmall" style={styles.modalTitle}>
            Add New Category
          </Text>
          <View>
            <TextInput
              cursorColor="gray"
              label="Category"
              style={styles.modalInput}
              mode="outlined"
              outlineStyle={{
                borderRadius: 12,
                borderWidth: 0,
              }}
              underlineColor="transparent"
              activeUnderlineColor="transparent"
              onChangeText={text => setCategoryName(text)}
            />
            <View></View>
          </View>
          <View style={styles.modalButtons}>
            <Button style={{ backgroundColor: 'red' }} onPress={hideDialog}>
              <Text style={{ color: 'white' }}>Cancel</Text>
            </Button>
            <Button
              style={styles.modalbtn}
              onPress={() => handleAddCategory(categoryName)}
            >
              <Text style={{ color: 'white' }}>Save</Text>
            </Button>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

export default ProductLibrary;

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#f2f2f2',
    marginVertical: 16,
  },
  chipContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  chips: {
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#f2f2f2',
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
  },
  modal: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    margin: 20,
  },
  modalTitle: {
    marginBottom: 16,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  modalbtn: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 50,
  },
  modalInput: {
    backgroundColor: '#f2f2f2',
    marginVertical: 16,
    borderRadius: 16,
    borderWidth: 0,
  },
  addProduct: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    padding: 16,
    borderWidth: 2,
    borderColor: '#f2f2f2',
    marginTop: 16,
    borderStyle: 'dashed',
    borderRadius: 12,
  },
});
