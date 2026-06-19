import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Chip, Divider, IconButton, Searchbar, Text } from 'react-native-paper';
import Cards from './Cards';
const Repairs = () => {
  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
      <View style={styles.heading}>
        <Text style={{ fontWeight: 'semibold' }} variant="displaySmall">
          Repairs Orders
        </Text>
        <IconButton icon="plus" iconColor="white" style={styles.addBtn} />
      </View>
      <View>
        <Searchbar
          placeholder="Search by name, model or CNIC..."
          onChangeText={() => {}}
          style={styles.search}
        />
      </View>
      <Divider style={{ marginBottom: 12 }} />
      <View style={styles.chips}>
        <Chip style={styles.chipTab}>All</Chip>
        <Chip style={styles.chipTab}>In Progress</Chip>
        <Chip style={styles.chipTab}>Pending</Chip>
        <Chip style={styles.chipTab}>Completed</Chip>
      </View>
      <View>
        <Cards />
      </View>
    </ScrollView>
  );
};

export default Repairs;

const styles = StyleSheet.create({
  heading: {
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  addBtn: {
    backgroundColor: 'black',
  },
  search: {
    backgroundColor: '#f2f2f2',
    marginBottom: 12,
  },
  chips: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  chipTab: {
    backgroundColor: 'white',
    borderRadius: 50,
    borderColor: '#f2f2f2',
    borderWidth: 1,
    marginBottom: 12,
  },
});
