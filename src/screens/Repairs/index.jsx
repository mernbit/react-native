import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from 'react-native-paper';

const Repairs = () => {
  return (
    <ScrollView>
      <View style={styles.heading}>
        <Text variant="displaySmall">Repairs Orders</Text>
      </View>
    </ScrollView>
  );
};

export default Repairs;

const styles = StyleSheet.create({
  heading: {
    marginTop: 48,
  },
});
