import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
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

const ProductLibrary = () => {
  const [visible, setVisible] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const chipItem = [
    {
      id: 1,
      name: 'Batteries',
    },
    {
      id: 2,
      name: 'Chargers',
    },
    {
      id: 3,
      name: 'Cables',
    },
    {
      id: 4,
      name: 'Cases',
    },
    {
      id: 5,
      name: 'Handsfree',
    },
    {
      id: 6,
      name: 'Memory Cards',
    },
    {
      id: 7,
      name: 'USB',
    },
  ];
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const [category, setCategory] = useState(chipItem);
  const handleAddCategory = categoryName => {
    if (!categoryName || categoryName.trim().length === 0) return;
    const newCategory = {
      id: Date.now(),
      name: categoryName.trim(),
    };
    setCategory(prev =>
      [...prev, newCategory].sort((a, b) => a.name.localeCompare(b.name)),
    );
    hideDialog();
  };
  return (
    <View>
      <View>
        <Searchbar placeholder="Search products" style={styles.search} />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          {category.map(item => {
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
});
