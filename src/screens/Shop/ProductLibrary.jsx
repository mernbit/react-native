import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Card, Chip, Searchbar, Modal, Button } from 'react-native-paper';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

const ProductLibrary = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
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
  const [category, setCategory] = useState(chipItem);
  const addCategory = categoryName => {
    const newCategory = {
      id: Date.now(),
      name: categoryName.trim(),
    };

    setCategory(prev =>
      [...prev, newCategory].sort((a, b) => a.name.localeCompare(b.name)),
    );
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
                {item.name}
              </Chip>
            );
          })}
          <Chip
            icon={() => <MaterialDesignIcons name="plus" size={16} />}
            style={styles.chips}
            onPress={() => showDialog()}
          >
            Add New
          </Chip>
        </View>
      </ScrollView>
      <Card style={styles.card}>
        <Card.Content>
          <Text>Stock: X units, Sold: Y units</Text>
        </Card.Content>
      </Card>
      <View>
        <Modal
          visible={visible}
          onDismiss={hideDialog}
          contentContainerStyle={styles.modal}
          // dismissable={true}
          theme={{
            colors: {
              backdrop: 'rgba(0, 0, 0, 0)',
            },
          }}
          dismissableBackButton={true}
        >
          <Text>Add New Category</Text>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button onPress={hideDialog}>Save</Button>
        </Modal>
      </View>
    </View>
  );
};

export default ProductLibrary;

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#f2f2f2',
    marginVertical: 16,
  },
  // searchContainer: {},
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
    padding: 16,
    borderRadius: 12,
    margin: 20,
  },
});
