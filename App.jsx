import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TabProvider from './src/contexts/TabContext';
import Routes from './src/screens/index';
function App() {
  const isDark = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider style={{ backgroundColor: 'white' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle={!isDark ? 'light-content' : 'dark-content'}
          backgroundColor={isDark ? '#121212' : '#fff'}
        />
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
