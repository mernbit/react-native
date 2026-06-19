import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Card, Chip, Text } from 'react-native-paper';

const Cards = () => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <View style={styles.profile}>
            <Text
              variant="titleLarge"
              style={{ color: '#fff', fontWeight: 'bold' }}
            >
              A
            </Text>
          </View>
          <View style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
            <Text variant="headlineSmall">Ahmad Raza</Text>
            <Text variant="bodyMedium" style={{ color: 'gray' }}>
              iPhone 11
            </Text>
            <View style={styles.tag}>
              <Text style={{ color: '#1447e6' }}>In Progress</Text>
            </View>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 8,
  },
  profile: {
    backgroundColor: 'black',
    color: '#fff',
    borderRadius: 100,
    fontWeight: 'semibold',
    height: 52,
    width: 52,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tag: {
    textAlign: 'center',
    borderRadius: 100,
    alignSelf: 'flex-start',
    borderRadius: 50,
    backgroundColor: '#1447e630',
    paddingHorizontal: 4,
    paddingVertical: 1,
    // borderColor: '#f2f2f2',
  },
});
