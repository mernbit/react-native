import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Card, Chip, Searchbar } from 'react-native-paper';

const ProductLibrary = () => {
  const chipItem = [
    {
      id: 1,
      name: 'Chargers',
    },
    {
      id: 2,
      name: 'Cables',
    },
    {
      id: 3,
      name: 'Handsfree',
    },
    {
      id: 4,
      name: 'Cases',
    },
    {
      id: 5,
      name: 'Memory Cards',
    },
    {
      id: 6,
      name: 'Batteries',
    },
    {
      id: 7,
      name: 'USB',
    },
  ];
  return (
    <View>
      <View style={styles.searchContainer}>
        <Searchbar placeholder="Search products" style={styles.search} />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          {chipItem.map(item => (
            <Chip style={styles.chips} key={item.id}>
              {item.name}
            </Chip>
          ))}
        </View>
      </ScrollView>
      <Card style={styles.card}>
        <Card.Content></Card.Content>
      </Card>
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
});
