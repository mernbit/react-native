import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Card, Chip, IconButton, Text } from 'react-native-paper';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
const Cards = () => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 18,
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
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
              <Text variant="titleLarge">Ahmad Raza</Text>
              <Text variant="bodyMedium" style={{ color: 'gray' }}>
                iPhone 11
              </Text>
              <View style={styles.tag}>
                <Text style={{ color: '#1447e6' }}>In Progress</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <View style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
              <Text style={{ textAlign: 'right' }}>10/10/2026</Text>
              <Text style={{ textAlign: 'right' }}>$200</Text>
            </View>
            <View>
              <IconButton
                icon={() => (
                  <MaterialDesignIcons
                    size={14}
                    color="gray"
                    name="greater-than"
                  />
                )}
                iconColor="gray"
                size={24}
              />
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
    paddingVertical: 8,
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
