import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
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
      id: 1,
      name: 'Batteries',
      custom: false,
    },
    {
      id: 2,
      name: 'Chargers',
      custom: false,
    },
    {
      id: 3,
      name: 'Cables',
      custom: false,
    },
    {
      id: 4,
      name: 'Cases',
      custom: false,
    },
    {
      id: 5,
      name: 'Handsfree',
      custom: false,
    },
    {
      id: 6,
      name: 'Memory Cards',
      custom: false,
    },
    {
      id: 7,
      name: 'USB',
      custom: false,
    },
  ];
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const [category, setCategory] = useState(chipItem);

  // Chips are fetched from "customChips in AsyncStorage" and stored in 'stored' variable
  const getCustomChips = async () => {
    const stored = await AsyncStorage.getItem('customChips');
    if (stored) {
      // If data exists in storage, it is parsed here and converted into JS
      setCustomChip(JSON.parse(stored));
    } else {
      // If data does not exist in storage, it is set to an empty array
      setCustomChip([]);
    }
  };

  useEffect(() => {
    getCustomChips();
  }, []);

  // Initialize custom chips
  useEffect(() => {
    const init = async () => {
      // Get custom chips from storage
      const stored = await AsyncStorage.getItem('customChips');
      // Parse custom chips
      const parsed = stored ? JSON.parse(stored) : [];
      // Set custom chips
      setCustomChip(parsed);
      // Set category
      setCategory(prev =>
        [...prev, ...parsed].sort((a, b) => a.name.localeCompare(b.name)),
      );
    };
    init();
  }, []);

  const handleAddCategory = async chip => {
    const newChip = {
      id: uuid.v4(),
      name: chip.trim(),
      custom: true,
    };

    if (customChip === null || customChip === undefined) {
      setCustomChip([newChip]);
      await AsyncStorage.setItem('customChips', JSON.stringify([newChip]));
    } else {
      setCustomChip(prev => [...prev, newChip]);
      await AsyncStorage.setItem(
        'customChips',
        JSON.stringify([...customChip, newChip]),
      );
    }
    setCategory(prev =>
      [...prev, newChip].sort((a, b) => a.name.localeCompare(b.name)),
    );
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
            console.log(item);
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
            <View>
              {/* Developer Use Only */}
              <Button
                onPress={async () => {
                  await AsyncStorage.removeItem('customChips');
                }}
              >
                Delete all
              </Button>
            </View>
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
