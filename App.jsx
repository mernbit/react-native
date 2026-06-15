/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TabProvider from './src/contexts/TabContext';
import Routes from './src/screens/index';
import { Text } from 'react-native-paper';
function App() {
  return (
    <SafeAreaProvider style={{ backgroundColor: 'white' }}>
      <SafeAreaView style={{ paddingHorizontal: 8, flex: 1 }}>
        <TabProvider>
          <Routes />
        </TabProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
