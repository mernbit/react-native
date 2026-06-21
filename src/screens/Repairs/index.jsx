import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Chip, Divider, IconButton, Searchbar, Text } from 'react-native-paper';
import Cards from './Cards';
import { useTabContext } from '../../contexts/TabContext';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

const Repairs = () => {
  const [activeChip, setActiveChip] = useState('All');
  const { setActiveTab } = useTabContext();
  useEffect(() => {
    setActiveTab('Repairs');
  }, []);
  const chips = [
    {
      id: 1,
      label: 'All',
    },
    {
      id: 2,
      label: 'In Progress',
    },
    {
      id: 3,
      label: 'Pending',
    },
    {
      id: 4,
      label: 'Completed',
    },
  ];

  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
      <View
        style={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text variant="titleMedium" style={{ color: 'gray' }}>
          App Name | Repairs
        </Text>
        <IconButton icon={() => <MaterialDesignIcons name="cog" size={30} />} />
      </View>
      <View style={styles.heading}>
        <Text style={{ fontWeight: 'semibold' }} variant="displaySmall">
          Repair Orders
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
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chips}
      >
        {chips.map(c => (
          <Chip
            key={c.id}
            onPress={() => setActiveChip(c.label)}
            style={[
              c.label === activeChip ? styles.chipActive : styles.chipTab,
            ]}
          >
            <Text
              style={{
                color: c.label === activeChip ? '#fff' : 'black',
                fontWeight: c.label === activeChip ? 'bold' : 'semibold',
              }}
            >
              {c.label}
            </Text>
          </Chip>
        ))}
      </ScrollView>
      <View>
        <Cards />
      </View>
    </ScrollView>
  );
};

export default Repairs;

const styles = StyleSheet.create({
  heading: {
    marginTop: 12,
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
    fontWeight: 'bold',
  },
  chipActive: {
    backgroundColor: 'black',
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 12,
  },
});
